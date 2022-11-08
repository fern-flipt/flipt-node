/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "../../..";
import * as core from "../../../core";

export const fliptRuleOrder: core.schemas.ObjectSchema<fliptRuleOrder.Raw, FliptApi.rules.fliptRuleOrder> =
  core.schemas.object({
    ruleIds: core.schemas.list(core.schemas.string()),
  });

export declare namespace fliptRuleOrder {
  interface Raw {
    ruleIds: string[];
  }
}
