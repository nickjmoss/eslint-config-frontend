import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { devDependencies, peerDependencies } from './package.json';

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: {
                index: 'src/index.ts',
            },
            formats: ['es'],
        },
        rollupOptions: {
            external: (id) =>
                id in devDependencies ||
                id in peerDependencies ||
                'globals' === id ||
                'eslint-plugin-prettier/recommended' === id,
        },
    },
    plugins: [dts({ include: 'src/**/*' })],
});
