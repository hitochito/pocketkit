<script lang="ts">
	import { Button, Iconify } from '$lib/components';
	import { CldImage } from 'svelte-cloudinary';
	import { images } from '$lib/assets/index';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col gap-2 items-center justify-center">
	<CldImage
		height={300}
		width={300}
		loading="eager"
		src={images.welcome}
		fetchpriority="high"
		alt="Welcome to PocketKit"
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
