<script>
	import { page } from '$app/stores';
	import Input from '$lib/components/ui/input/input.svelte';
	import ModeToggle from '$lib/components/navigation/ModeToggle.svelte';
	import Icon from '$lib/components/ui/icons/Icon.svelte';

	let isMenuOpen = false;

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
			<ul class="flex items-center gap-4">
				<li class:active={$page.url.pathname === '/'}><a href="/">Home</a></li>
				<li class:active={$page.url.pathname === '/about'}><a href="/about">About</a></li>
				<li class:active={$page.url.pathname === '/services'}><a href="/services">Services</a></li>
				<li class:active={$page.url.pathname === '/contact'}><a href="/contact">Contact</a></li>
				<li><ModeToggle /></li>
			</ul>
		</div>
	</div>
</nav>

{#if isMenuOpen}
	<div class="fullscreen-menu">
		<button class="close-button" on:click={toggleMenu}>
			<Icon class="text-2xl" icon="x" />
		</button>
		<ul class="menu-items">
			<li class:active={$page.url.pathname === '/'}><a href="/" on:click={toggleMenu}>Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a href="/about" on:click={toggleMenu}>About</a>
			</li>
			<li class:active={$page.url.pathname === '/services'}>
				<a href="/services" on:click={toggleMenu}>Services</a>
			</li>
			<li class:active={$page.url.pathname === '/contact'}>
				<a href="/contact" on:click={toggleMenu}>Contact</a>
			</li>
			<li><ModeToggle /></li>
		</ul>
	</div>
{/if}

<style lang="postcss">
	.navbar {
		@apply px-5 py-2;
	}
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
</style>
