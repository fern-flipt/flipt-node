/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const fliptConstraintCreateRequest: core.schemas.ObjectSchema<
  fliptConstraintCreateRequest.Raw,
  FliptApi.constraints.fliptConstraintCreateRequest
> = core.schemas.object({
  type: core.schemas.lazy(() => serializers.commons.fliptComparisonType),
  property: core.schemas.string(),
  operator: core.schemas.string(),
  value: core.schemas.string().optional(),
});

export declare namespace fliptConstraintCreateRequest {
  interface Raw {
    type: serializers.commons.fliptComparisonType.Raw;
    property: string;
    operator: string;
    value?: string | null;
  }
}
