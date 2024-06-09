/**
 * An array of routes that are accessible to the public.
 * These routes don't require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/", "/auth/new-verification"];

/**
 * An array of routes that are used for authentication
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for api authentication routes
 * Routes that starts with this prefix are used for API authentication process
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
