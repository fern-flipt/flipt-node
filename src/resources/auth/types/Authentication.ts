/**
 * This file auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@fern-api/flipt";

export interface Authentication {
  id: string;
  method: FliptApi.AuthenticationMethod;
  createdAt: Date;
  updatedAt: Date;
  expiresAt?: Date;
  metadata: Record<string, string>;
}