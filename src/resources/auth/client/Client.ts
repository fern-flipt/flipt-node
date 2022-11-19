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

  public async listTokens(): Promise<FliptApi.auth.listTokens.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/auth/v1/tokens"),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.credentials)),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.auth.authenticationList.parse(response.body as serializers.auth.authenticationList.Raw),
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

  public async getToken(request: FliptApi.auth.getToken.Request): Promise<FliptApi.auth.getToken.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, `/auth/v1/tokens/${request.id}`),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.credentials)),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.auth.authentication.parse(response.body as serializers.auth.authentication.Raw),
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

  public async createToken(
    request: FliptApi.auth.authenticationTokenCreateRequest
  ): Promise<FliptApi.auth.createToken.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/auth/v1/method/token"),
      method: "POST",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.credentials)),
      },
      body: serializers.auth.authenticationTokenCreateRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.auth.authenticationToken.parse(response.body as serializers.auth.authenticationToken.Raw),
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

  public async deleteToken(request: FliptApi.auth.deleteToken.Request): Promise<FliptApi.auth.deleteToken.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, `/auth/v1/tokens/${request.id}`),
      method: "DELETE",
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

  public async getSelf(): Promise<FliptApi.auth.getSelf.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/auth/v1/self"),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.credentials)),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.auth.authentication.parse(response.body as serializers.auth.authentication.Raw),
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
