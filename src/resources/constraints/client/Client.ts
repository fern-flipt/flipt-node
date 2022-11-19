/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../environments";
import * as core from "../../../core";
import { FliptApi } from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../serialization";

export declare namespace Client {
  interface Options {
    environment?: environments.Environment | string;
    auth?: {
      credentials?: core.Supplier<core.BasicAuth>;
    };
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async create(request: FliptApi.constraints.create.Request): Promise<FliptApi.constraints.create.Response> {
    const response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.Environment.Production,
        `/api/v1/segments/${request.segmentKey}/constraints/`
      ),
      method: "POST",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.credentials)),
      },
      body: serializers.constraints.constraintCreateRequest.json(request._body),
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.constraints.constraint.parse(response.body as serializers.constraints.constraint.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async delete(request: FliptApi.constraints.delete.Request): Promise<FliptApi.constraints.delete.Response> {
    const response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.Environment.Production,
        `/api/v1/segments/${request.segmentKey}/constraints/${request.id}`
      ),
      method: "POST",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.credentials)),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async update(request: FliptApi.constraints.update.Request): Promise<FliptApi.constraints.update.Response> {
    const response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.Environment.Production,
        `/api/v1/segments/${request.segmentKey}/constraints/${request.id}`
      ),
      method: "POST",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.credentials)),
      },
      body: serializers.constraints.constraintUpdateRequest.json(request._body),
    });
    if (response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }
}
