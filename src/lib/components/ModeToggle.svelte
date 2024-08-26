<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';
	import Iconify from '$lib/components/Iconify.svelte';
</script>

<button on:click={toggleMode}>
	{#if $mode === 'light'}
		<Iconify icon="sun" />
	{:else}
		<Iconify icon="moon" />
	{/if}
	<span class="sr-only">Toggle theme</span>
</button>
