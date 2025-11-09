import type { ApiResponse } from 'shared';

export async function handleApiError(response: Response) {
    if (!response.ok) {
        const errorData: ApiResponse = await response.json();

        throw new Error(errorData.message);
    }
}
