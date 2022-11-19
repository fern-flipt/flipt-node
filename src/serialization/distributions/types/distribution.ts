/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "../../..";
import * as core from "../../../core";

export const distribution: core.schemas.ObjectSchema<distribution.Raw, FliptApi.distributions.distribution> =
  core.schemas.object({
    id: core.schemas.string(),
    ruleId: core.schemas.string(),
    variantId: core.schemas.string(),
    rollout: core.schemas.number(),
    createdAt: core.schemas.date(),
    updatedAt: core.schemas.date(),
  });

export declare namespace distribution {
  interface Raw {
    id: string;
    ruleId: string;
    variantId: string;
    rollout: number;
    createdAt: string;
    updatedAt: string;
  }
}
