/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@fern-api/flipt";

export interface RuleList {
  rules: FliptApi.Rule[];
  nextPageToken: string;
  totalCount: number;
}