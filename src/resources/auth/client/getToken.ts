/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "../../..";
import * as core from "../../../core";

export interface Request {
  id: string;
}

export type Response = core.APIResponse<FliptApi.auth.authentication, FliptApi.auth.getToken.Error>;
export type Error = FliptApi.auth.getToken.Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: FliptApi.auth.getToken.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    _other: (value: core.Fetcher.Error) => _Result;
  }
}
