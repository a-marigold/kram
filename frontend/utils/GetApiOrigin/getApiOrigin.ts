export function getApiOrigin(
    envOrigin: string | undefined,
    localOrigin: string
) {
    if (!envOrigin) return localOrigin;

    const prepareEnvOrigin = envOrigin.slice(0, -1);
}
