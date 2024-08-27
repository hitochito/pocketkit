<script>
	import '@fontsource-variable/grandstander'; // weights 100-900;
	import { ModeWatcher } from 'mode-watcher';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
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
