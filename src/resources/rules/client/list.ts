/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export interface Request {
  limit?: number;
  offset?: number;
  pageToken?: string;
  flagKey: string;
}

export type Response = core.APIResponse<FliptApi.RuleList, FliptApi.rules.list.Error>;
export type Error = FliptApi.rules.list.Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: FliptApi.rules.list.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    _other: (value: core.Fetcher.Error) => _Result;
  }
}
