export class ApiError extends Error {
    code: number | undefined;

    constructor(message: string, code?: number) {
        super(message);
        this.code = code;
    }
}
