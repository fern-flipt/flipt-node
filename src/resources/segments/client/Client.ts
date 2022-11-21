/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../environments";
import * as core from "../../../core";
import { FliptApi } from "@fern-api/flipt";
import urlJoin from "url-join";
import * as serializers from "../../../serialization";

export declare namespace Client {
  interface Options {
    environment?: environments.Environment | string;
    auth?: {
      token?: core.Supplier<core.BearerToken>;
    };
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async list(request: FliptApi.segments.list.Request): Promise<FliptApi.segments.list.Response> {
    const queryParameters = new URLSearchParams();
    queryParameters.append("limit", request.limit.toString());
    queryParameters.append("offset", request.offset.toString());
    queryParameters.append("pageToken", request.pageToken);
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/api/v1/segments/"),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: await serializers.SegmentList.parse(response.body as serializers.SegmentList.Raw),
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

  public async create(request: FliptApi.SegmentCreateRequest): Promise<FliptApi.segments.create.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/api/v1/segments/"),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
      body: await serializers.SegmentCreateRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: await serializers.Segment.parse(response.body as serializers.Segment.Raw),
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

  public async get(request: FliptApi.segments.get.Request): Promise<FliptApi.segments.get.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, `/api/v1/segments/${request.key}`),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: await serializers.Segment.parse(response.body as serializers.Segment.Raw),
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

  public async delete(request: FliptApi.segments.delete.Request): Promise<FliptApi.segments.delete.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, `/api/v1/segments/${request.key}`),
      method: "DELETE",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
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

  public async update(request: FliptApi.segments.update.Request): Promise<FliptApi.segments.update.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, `/api/v1/segments/${request.key}`),
      method: "PUT",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
      body: await serializers.SegmentUpdateRequest.json(request._body),
    });
    if (response.ok) {
      return {
        ok: true,
        body: await serializers.Segment.parse(response.body as serializers.Segment.Raw),
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
