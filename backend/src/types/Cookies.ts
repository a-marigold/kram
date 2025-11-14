export const enum Cookie {
    AccessToken = 'accessToken',
    RefreshToken = 'refreshToken',
}

export type Cookies = { [key in Cookie]: string | undefined };
