import { apiOrigin } from '@/utils/GetApiOrigin';

import { handleApiError } from '@/utils/HandleApiError';

import type { ApiResponse, RegisterData } from '@none/shared';

export async function checkUser(userName: string) {
    const prepareEmail = JSON.stringify({ userName });

    const response = await fetch(`${apiOrigin}/auth/check-user`, {
        method: 'GET',
        body: prepareEmail,
    });

    handleApiError(response);
    const data = await response.json();

    return data;
}

export async function register(userData: RegisterData) {
    const prepareUser = JSON.stringify(userData);

    const response = await fetch(`${apiOrigin}/auth/register`, {
        method: 'POST',
        credentials: 'include',
        body: prepareUser,
    });

    handleApiError(response);

    const data: ApiResponse = await response.json();

    return data;
}

export async function loginWithEmail(email: string, password: string) {
    const prepareUser = JSON.stringify({ email, password });

    const response = await fetch(`${apiOrigin}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        body: prepareUser,
    });

    handleApiError(response);

    const data = await response.json();

    return data;
}
