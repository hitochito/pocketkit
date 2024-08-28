<script>
	import welcome from '$lib/images/welcome.webp';
	import Iconify from '$lib/components/Iconify.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="welcome-container">
	<!-- <enhanced:img src={welcome} alt="Welcome to PocketKit" class="welcome-image" /> -->
	<h1>Welcome to PocketKit <Iconify icon="smile" /></h1>
	<p>A PocketBase x SvelteKit Starter Kit</p>
	<Button href="https://github.com/hitochito/pocketkit/blob/main/README.md">Get Started</Button>
</section>

<style lang="postcss">
	.welcome-image {
		@apply max-w-xs h-auto;
	}

	.welcome-container {
		@apply flex flex-col gap-2 items-center justify-center;
	}
	h1 {
		@apply text-2xl font-bold;
	}
</style>
