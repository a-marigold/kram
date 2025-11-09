import type { ApiResponse } from 'shared';

import { apiOrigin } from '@/utils/GetApiOrigin';

import { handleApiError } from '@/utils/HandleApiError';

export async function checkEmail(email: string) {
    const prepareEmail = JSON.stringify({ email });

    const response = await fetch(`${apiOrigin}/auth/check-email`, {
        method: 'POST',

        body: prepareEmail,
    });

    handleApiError(response);

    const data = await response.json();

    return data;
}

export async function registerWithEmail(email: string, password: string) {
    const prepareUser = JSON.stringify({ email, password });

    const response = await fetch(`${apiOrigin}/auth/register-email`, {
        method: 'POST',
        credentials: 'include',
        body: prepareUser,
    });

    handleApiError(response);

    const data = await response.json();

    return data;
}

export async function loginWithEmail(email: string, password: string) {}
