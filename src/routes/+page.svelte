<script lang="ts">
	import Iconify from '$lib/components/Iconify.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Image } from '@unpic/svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col gap-2 items-center justify-center">
	<Image
		src="https://i.ibb.co/n6GM3rt/welcome.webp"
		alt="Welcome to PocketKit"
		fetchpriority="high"
		loading="eager"
		height={300}
		width={300}
	/>
	<h1 class="text-2xl font-bold">Welcome to PocketKit <Iconify icon="smile" /></h1>
	<p>A PocketBase x SvelteKit Starter Kit</p>

	<div class="flex gap-4">
		<Button href="https://github.com/hitochito/pocketkit/blob/main/README.md" target="_blank">
			<Iconify class="mr-1 mb-0.5 text-xl" icon="rocket" />
			Get Started
		</Button>
		<Button href="https://svelte.dev/" variant="secondary" target="_blank">
			<Iconify class="mr-1 mb-0.5 text-xl" icon="book" />
			Learn Svelte
		</Button>
	</div>
</section>
