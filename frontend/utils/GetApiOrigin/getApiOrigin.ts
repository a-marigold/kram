export function getApiOrigin(
    envOrigin: string | undefined,

    localOrigin: string
) {
    if (!envOrigin) return localOrigin;

    if (envOrigin.endsWith('/')) return envOrigin.slice(0, -1);

    return envOrigin;
}

export const apiOrigin = getApiOrigin(
    process.env.NEXT_PUBLIC_API_ORIGIN,

    'http://127.0.0.1:1000'
);
