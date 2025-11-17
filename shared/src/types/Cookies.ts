const AuthCookie = {
    AccessToken: 'accessToken',
    RefreshToken: 'refreshToken',
} as const;

export const Cookie = {
    ...AuthCookie,
} as const;

export type CookieName = (typeof Cookie)[keyof typeof Cookie];
export type Cookies = { [K in CookieName]: string };
