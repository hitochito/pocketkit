<script lang="ts">
	import Iconify from '$lib/components/Iconify.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Image } from '@unpic/svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="welcome-container">
	<Image
		src="https://i.ibb.co/n6GM3rt/welcome.webp"
		alt="Welcome to PocketKit"
		fetchpriority="high"
		loading="eager"
		height={300}
		width={300}
	/>
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
