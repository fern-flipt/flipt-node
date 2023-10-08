/**
 */

import * as serializers from "../../..";
import * as FliptApi from "../../../../api";
import * as core from "../../../../core";

export const VariantEvaluationResponse: core.serialization.ObjectSchema<
    serializers.evaluation.VariantEvaluationResponse.Raw,
    FliptApi.evaluation.VariantEvaluationResponse
> = core.serialization.object({
    requestId: core.serialization.string(),
    match: core.serialization.boolean(),
    segmentKeys: core.serialization.list(core.serialization.string()),
    variantKey: core.serialization.string(),
    variantAttachment: core.serialization.string(),
    timestamp: core.serialization.date(),
    requestDurationMillis: core.serialization.number(),
    reason: core.serialization.lazy(async () => (await import("../../..")).evaluation.EvaluationReason),
});

export declare namespace VariantEvaluationResponse {
    interface Raw {
        requestId: string;
        match: boolean;
        segmentKeys: string[];
        variantKey: string;
        variantAttachment: string;
        timestamp: string;
        requestDurationMillis: number;
        reason: serializers.evaluation.EvaluationReason.Raw;
    }
}
