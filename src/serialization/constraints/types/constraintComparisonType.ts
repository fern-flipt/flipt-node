/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "../../..";
import * as core from "../../../core";

export const constraintComparisonType: core.schemas.Schema<
  constraintComparisonType.Raw,
  FliptApi.constraints.constraintComparisonType
> = core.schemas.string().transform<FliptApi.constraints.constraintComparisonType>({
  parse: (value) => FliptApi.constraints.constraintComparisonType._parse(value),
  json: ({ value }) => value,
});

export declare namespace constraintComparisonType {
  type Raw = string;
}
