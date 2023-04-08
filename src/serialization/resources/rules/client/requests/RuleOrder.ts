/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../../../core";

export const RuleOrder: core.serialization.Schema<serializers.RuleOrder.Raw, FliptApi.RuleOrder> =
    core.serialization.object({
        ruleIds: core.serialization.list(core.serialization.string()),
    });

export declare namespace RuleOrder {
    interface Raw {
        ruleIds: string[];
    }
}