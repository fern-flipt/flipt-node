/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";
import * as serializers from "../..";

export const SegmentCreateRequest: core.schemas.ObjectSchema<SegmentCreateRequest.Raw, FliptApi.SegmentCreateRequest> =
  core.schemas.object({
    key: core.schemas.string(),
    name: core.schemas.string(),
    description: core.schemas.string(),
    matchType: core.schemas.lazy(async () => (await import("../..")).SegmentMatchType),
  });

export declare namespace SegmentCreateRequest {
  interface Raw {
    key: string;
    name: string;
    description: string;
    matchType: serializers.SegmentMatchType.Raw;
  }
}
