import { ApiError } from '@none/shared';
import type { ApiResponse } from '@none/shared';

export async function handleApiError(response: Response) {
    if (!response.ok) {
        const errorData: ApiResponse = await response.json();

        throw new ApiError(errorData.message, errorData.code);
    }
}
