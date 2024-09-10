<script lang="ts">
	import { Seo } from '$lib/components';
	import { images } from '$lib/assets/index';

	export let data;

	$: characters = data?.characters;
</script>

<div class="character-container">
	{#each characters as { name, image }}
		<div class="character-card">
			<img src={image} alt={name} height={100} width={100} class="character-image" />
			<p class="character-name">{name}</p>
		</div>
	{/each}
</div>

<Seo
	title="Sverdle Characters"
	src={images.welcome}
	width={300}
	height={300}
	description="Dynamically load characters from an API using a load function of SvelteKit"
/>

<style lang="postcss">
	.character-container {
		@apply flex flex-wrap justify-center gap-4;
	}

	.character-card {
		@apply flex flex-col justify-between items-center w-64 bg-muted rounded-lg shadow overflow-hidden py-4;
	}

	.character-name {
		@apply text-lg font-semibold;
	}
</style>
