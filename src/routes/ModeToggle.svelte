<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';
	import { Iconify } from '$lib/components';
</script>

<button on:click={toggleMode}>
	{#if $mode === 'light'}
		<Iconify class="mt-1 text-lg" icon="sun" />
	{:else}
		<Iconify class="mt-1 text-lg" icon="moon" />
	{/if}
	<span class="sr-only">Toggle theme</span>
</button>

<style lang="postcss">
	button {
		@apply fixed bottom-2 right-2 rounded px-2 py-1 bg-muted text-foreground;
	}
</style>
