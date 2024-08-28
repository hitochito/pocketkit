<script lang="ts">
	import '@fontsource-variable/grandstander'; // weights 100-900;
	import { ModeWatcher } from 'mode-watcher';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';

	// Progress Loader While Navigating Between Pages
	import { navigating } from '$app/stores';
	import '$lib/utils/nprogress/nprogress.css';
	import NProgress from '$lib/utils/nprogress/nprogress';

	NProgress.configure({
		minimum: 0.56,
		showSpinner: false
	});

	$: {
		if ($navigating) {
			NProgress.start();
		} else NProgress.done();
	}
</script>

<ModeWatcher />

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="postcss">
	.app {
		@apply min-h-screen flex flex-col;
	}

	main {
		@apply flex flex-1 flex-col p-5 w-full max-w-4xl mx-auto;
	}
</style>
