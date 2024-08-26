<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</section>

<style lang="postcss">
	h1 {
		@apply text-3xl text-center font-bold mb-4;
	}

	p {
		@apply mb-4;
	}

	a {
		@apply text-blue-600 hover:underline;
	}

	pre {
		@apply text-base bg-white bg-opacity-45 rounded shadow-md p-2 overflow-x-auto text-gray-800 mb-4 w-full;
	}
</style>
