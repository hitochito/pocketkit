<script lang="ts">
	import { page } from '$app/stores';

	interface NavItem {
		href: string;
		label: string;
	}

	export let navItems: NavItem[];
</script>

<nav>
	<svg viewBox="0 0 2 3" aria-hidden="true">
		<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
	</svg>
	<ul>
		{#each navItems as { href, label }}
			<li
				aria-current={$page.url.pathname === href ||
				($page.url.pathname.startsWith(href) && href !== '/')
					? 'page'
					: undefined}
			>
				<a {href}>{label}</a>
			</li>
		{/each}
	</ul>
	<svg viewBox="0 0 2 3" aria-hidden="true">
		<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
	</svg>
</nav>

<style lang="postcss">
	nav {
		@apply flex justify-center;
	}

	svg {
		@apply w-8 h-12 block;
	}

	path {
		@apply fill-muted;
	}

	ul {
		@apply relative p-0 m-0 h-12 flex justify-center items-center list-none bg-muted bg-contain;
	}

	li {
		@apply relative h-full;
	}

	li[aria-current='page']::before {
		@apply content-[''] w-0 h-0 absolute top-0 left-[calc(50%-6px)] border-[6px] border-solid border-transparent border-t-primary;
	}

	nav a {
		@apply flex h-full items-center px-2 font-bold text-xs uppercase tracking-widest no-underline transition-colors duration-200 ease-linear hover:text-primary;
	}
</style>
