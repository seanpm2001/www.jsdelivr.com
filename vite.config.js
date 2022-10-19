import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(() => ({
	root: './src/globalping',
	base: '/globalping/',
	plugins: [ vue() ],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src/globalping', import.meta.url)),
		},
	},
	build: {
		outDir: '../../dist/globalping',
		sourcemap: true,
	},
	css: {
		devSourcemap: true,
	},
}));
