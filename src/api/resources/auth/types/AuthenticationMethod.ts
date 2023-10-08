/**
 */

/**
 * The default is METHOD_NONE
 */
export type AuthenticationMethod = "METHOD_NONE" | "METHOD_TOKEN" | "METHOD_OIDC" | "METHOD_KUBERNETES";

export const AuthenticationMethod = {
    MethodNone: "METHOD_NONE",
    MethodToken: "METHOD_TOKEN",
    MethodOidc: "METHOD_OIDC",
    MethodKubernetes: "METHOD_KUBERNETES",
} as const;
