/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export const Pageable: core.schemas.ObjectSchema<Pageable.Raw, FliptApi.Pageable> = core.schemas.object({
  nextPageToken: core.schemas.string(),
  totalCount: core.schemas.number(),
});

export declare namespace Pageable {
  interface Raw {
    nextPageToken: string;
    totalCount: number;
  }
}
