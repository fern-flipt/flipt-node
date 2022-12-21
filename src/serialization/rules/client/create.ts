/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export const Request: core.schemas.Schema<serializers.rules.create.Request.Raw, FliptApi.RuleCreateRequest> =
  core.schemas.object({
    segmentKey: core.schemas.string(),
    rank: core.schemas.number(),
  });

export declare namespace Request {
  interface Raw {
    segmentKey: string;
    rank: number;
  }
}

export const Response: core.schemas.Schema<serializers.rules.create.Response.Raw, FliptApi.Rule> =
  core.schemas.lazyObject(async () => (await import("../..")).Rule);

export declare namespace Response {
  type Raw = serializers.Rule.Raw;
}