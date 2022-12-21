/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export const Request: core.schemas.Schema<
  serializers.distributions.update.Request.Raw,
  FliptApi.DistributionUpdateRequest
> = core.schemas.object({
  variantId: core.schemas.string(),
  rollout: core.schemas.number(),
});

export declare namespace Request {
  interface Raw {
    variantId: string;
    rollout: number;
  }
}

export const Response: core.schemas.Schema<serializers.distributions.update.Response.Raw, FliptApi.Distribution> =
  core.schemas.lazyObject(async () => (await import("../..")).Distribution);

export declare namespace Response {
  type Raw = serializers.Distribution.Raw;
}