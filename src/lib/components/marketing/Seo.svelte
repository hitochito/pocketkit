<script lang="ts">
	import { images } from '$lib/assets';
	import { CldOgImage } from 'svelte-cloudinary';

	export let title = 'PocketKit - A SvelteKit x PocketBase starter kit';
	export let description =
		'A SvelteKit x PocketBase starter kit for rapid web application development';
	export let src = images.ogImageHome;
	export let height = 630;
	export let width = 1200;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Open Graph Tags -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<!-- Twitter Card Tags -->
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<CldOgImage {title} {src} twitterTitle={title} {height} {width} />
