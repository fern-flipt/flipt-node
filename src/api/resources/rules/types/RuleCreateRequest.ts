/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FliptApi from "../../..";

export interface RuleCreateRequest {
    segmentKey: string;
    segmentKeys?: string[];
    segmentOperator?: FliptApi.RuleSegmentOperator;
    rank: number;
}
