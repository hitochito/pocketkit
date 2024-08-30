<script lang="ts">
	import { onMount } from 'svelte';

	let isLoading = true;

	onMount(() => {
		isLoading = false;
	});
</script>

{#if isLoading}
	<div class="loading-div">
		<svg viewBox="0 0 50 50">
			<circle class="ring" cx="25" cy="25" r="20"></circle>
			<circle class="ball" cx="25" cy="5" r="3.5"></circle>
		</svg>
	</div>
{:else}
	<slot />
{/if}

<style lang="postcss">
	.loading-div {
		@apply fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
	}
	svg {
		@apply w-14 h-14;
		animation: 1.5s spin ease infinite;
	}

	.ring {
		fill: none;
		stroke-width: 2;
		@apply stroke-secondary-foreground;
	}

	.ball {
		stroke: none;
		@apply fill-primary;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
