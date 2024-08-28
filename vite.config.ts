import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type PluginOption } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	plugins: [
		sveltekit(),
		enhancedImages(),
		visualizer({
			open: true,
			filename: './stats/bundle-analysis.html'
		}) as PluginOption
	]
});
