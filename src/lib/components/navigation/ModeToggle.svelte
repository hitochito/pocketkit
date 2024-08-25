<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';
	import Icon from '$lib/components/ui/icons/Icon.svelte';
</script>

<button on:click={toggleMode} class="">
	{#if $mode === 'light'}
		<Icon icon="sun" />
	{:else}
		<Icon icon="moon" />
	{/if}
	<span class="sr-only">Toggle theme</span>
</button>
