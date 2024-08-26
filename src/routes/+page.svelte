<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/welcome.webp';
	import Iconify from '$lib/components/Iconify.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="welcome-container">
		<img src={welcome} alt="Welcome" class="welcome-image" />
		<h1>Welcome to PocketKit <Iconify icon="smile" /></h1>
		<Counter />
	</div>
</section>

<style lang="postcss">
	.welcome-image {
		@apply max-w-xs h-auto;
	}

	.welcome-container {
		@apply flex flex-col items-center justify-center;
	}
	h1 {
		@apply mt-0 text-3xl font-bold;
	}
</style>
