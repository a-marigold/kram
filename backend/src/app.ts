import Fastify from 'fastify';

import {
    validatorCompiler,
    serializerCompiler,
} from 'fastify-type-provider-zod';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';

const app = Fastify({
    logger: Boolean(process.env.PRODUCTION) || false,
}).withTypeProvider<ZodTypeProvider>();

export function buildApp() {
    app.setValidatorCompiler(validatorCompiler);

    app.setSerializerCompiler(serializerCompiler);

    return app;
}

export type ProvideredFastifyInstance = typeof app;
