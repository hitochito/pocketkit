<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import Icon from '$lib/components/ui/icons/Icon.svelte';
</script>

<Button on:click={toggleMode} variant="ghost" class="ok">
	{#if $mode === 'light'}
		<Icon icon="sun" class="text-lg" />
	{:else}
		<Icon icon="moon" class="text-lg" />
	{/if}
	<span class="sr-only">Toggle theme</span>
</Button>
