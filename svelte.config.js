import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),
    kit: {
        adapter: adapter(),
        target: '#svelte',
        prerender: {
            enabled: true,
        }
    }
};

export default config;
