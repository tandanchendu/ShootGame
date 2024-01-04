import { createRequire } from 'node:module';
import * as ps from 'node:path';

declare global {
    namespace globalThis {
        var ENGINE_LOCATION: string;
    }
}

const requireMeta = createRequire(import.meta.url);

const loader: {
    ['import'](id: 'cc'): Promise<typeof import('cc')>;
} = requireMeta(ps.join(globalThis.ENGINE_LOCATION, 'bin', '.cache', 'dev', 'editor', 'loader.js')).default;

export { loader };