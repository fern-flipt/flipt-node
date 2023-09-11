/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FliptApi from "../../..";

export interface Flag {
    namespaceKey: string;
    key: string;
    name: string;
    description: string;
    enabled: boolean;
    createdAt: Date;
    updatedAt: Date;
    variants: FliptApi.Variant[];
    type: FliptApi.FlagType;
}
