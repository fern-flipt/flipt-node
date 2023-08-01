/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../../core";

export const RolloutList: core.serialization.ObjectSchema<serializers.RolloutList.Raw, FliptApi.RolloutList> =
    core.serialization.object({
        rollouts: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).Rollout)
        ),
        nextPageToken: core.serialization.string(),
        totalCount: core.serialization.number(),
    });

export declare namespace RolloutList {
    interface Raw {
        rollouts: serializers.Rollout.Raw[];
        nextPageToken: string;
        totalCount: number;
    }
}