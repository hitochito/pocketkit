<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';
	import Iconify from '$lib/components/Iconify.svelte';
</script>

<button on:click={toggleMode}>
	{#if $mode === 'light'}
		<Iconify class="text-lg" icon="sun" />
	{:else}
		<Iconify class="text-lg" icon="moon" />
	{/if}
	<span class="sr-only">Toggle theme</span>
</button>

<style lang="postcss">
	button {
		@apply fixed bottom-5 right-5 rounded px-2 py-1 bg-muted text-foreground;
	}
</style>
