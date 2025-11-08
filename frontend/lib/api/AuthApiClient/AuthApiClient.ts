import { apiOrigin } from '@/utils/GetApiOrigin';

export async function registerWithEmail(email: string, password: string) {
    const prepareUser = JSON.stringify({ email, password });

    const response = await fetch(`${apiOrigin}/auth/register`, {
        method: 'POST',
        credentials: 'include',
        body: prepareUser,
    });

    if (!response.ok) {
        const errorData = await response.json();

        throw new Error(errorData);
    }

    const data = await response.json();

    return data;
}
