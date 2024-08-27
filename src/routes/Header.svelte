<script>
	import { page } from '$app/stores';
	import Iconify from '$lib/components/Iconify.svelte';
	import Nav from './Nav.svelte';

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/sverdle', label: 'Sverdle' }
	];
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<Iconify class="text-3xl" icon="svelte" />
		</a>
	</div>

	<Nav {navItems} />

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<Iconify class="text-3xl bg-white rounded-full" icon="github" />
		</a>
	</div>
</header>

<style lang="postcss">
	header {
		@apply flex justify-between;
	}

	.corner {
		@apply px-2;
	}

	.corner a {
		@apply flex items-center justify-center w-full h-full;
	}
</style>
