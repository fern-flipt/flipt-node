/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@fern-api/flipt";

export interface SegmentUpdateRequest {
  name: string;
  description: string;
  matchType: FliptApi.SegmentMatchType;
}