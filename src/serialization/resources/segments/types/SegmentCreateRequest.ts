/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const SegmentCreateRequest: core.serialization.ObjectSchema<
    serializers.SegmentCreateRequest.Raw,
    FliptApi.SegmentCreateRequest
> = core.serialization.object({
    key: core.serialization.string(),
    name: core.serialization.string(),
    description: core.serialization.string(),
    matchType: core.serialization.lazy(async () => (await import("../../..")).SegmentMatchType),
});

export declare namespace SegmentCreateRequest {
    interface Raw {
        key: string;
        name: string;
        description: string;
        matchType: serializers.SegmentMatchType.Raw;
    }
}
