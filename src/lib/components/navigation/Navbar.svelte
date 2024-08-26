<script lang="ts">
	import { page } from '$app/stores';
	import ModeToggle from '$lib/components/navigation/ModeToggle.svelte';
	import Icon from '$lib/components/ui/icons/Icon.svelte';
	import { fade } from 'svelte/transition';

	let isMenuOpen = false;
	$: currentPath = $page.url.pathname;

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/contact', label: 'Contact' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="navbar">
	<div class="navbar-content">
		<h1>PocketKit</h1>
		<button class="md:hidden" on:click={toggleMenu}>
			<Icon class="text-2xl" icon="menu" />
		</button>
		<div class="hidden md:block">
			<ul class="nav-items">
				{#each navItems as { href, label }}
					<li class:active={currentPath === href}>
						<a {href}>{label}</a>
					</li>
				{/each}
				<li><ModeToggle /></li>
			</ul>
		</div>
	</div>
</nav>

{#if isMenuOpen}
	<div class="fullscreen-menu" transition:fade={{ duration: 200 }}>
		<button class="close-button" on:click={toggleMenu}>
			<Icon class="text-2xl" icon="x" />
		</button>
		<ul class="menu-items">
			{#each navItems as { href, label }}
				<li class:active={currentPath === href}>
					<a {href} on:click={toggleMenu}>{label}</a>
				</li>
			{/each}
			<li><ModeToggle /></li>
		</ul>
	</div>
{/if}

<style lang="postcss">
	.navbar-content {
		@apply flex flex-wrap justify-between items-center;
	}
	h1 {
		@apply text-3xl mt-1 font-bold uppercase;
	}
	ul {
		@apply text-lg flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 md:flex items-center gap-2;
	}
	li {
		@apply hover:text-primary text-muted-foreground rounded-md px-4 py-2;
	}
	li.active {
		@apply font-bold text-primary;
	}

	.fullscreen-menu {
		@apply fixed inset-0 bg-background z-50 flex flex-col items-center justify-center;
	}

	.close-button {
		@apply absolute top-4 right-4 text-2xl;
	}

	.menu-items {
		@apply flex flex-col items-center gap-6 text-2xl;
	}

	.menu-items li {
		@apply text-center;
	}

	.nav-items {
		@apply text-lg flex-row w-auto items-center gap-2;
	}
</style>
