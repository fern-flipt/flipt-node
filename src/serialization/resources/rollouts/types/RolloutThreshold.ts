/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../../core";

export const RolloutThreshold: core.serialization.ObjectSchema<
    serializers.RolloutThreshold.Raw,
    FliptApi.RolloutThreshold
> = core.serialization.object({
    percentage: core.serialization.number(),
    value: core.serialization.boolean(),
});

export declare namespace RolloutThreshold {
    interface Raw {
        percentage: number;
        value: boolean;
    }
}