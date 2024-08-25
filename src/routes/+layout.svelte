<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { onNavigate } from '$app/navigation';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import '@fontsource-variable/grandstander'; // weights 100-900;

	// VIEW TRANSITIONS API
	onNavigate((navigation) => {
		// @ts-ignore <-- This is a private API so we need to ignore the TS error
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore <-- This is a private API so we need to ignore the TS error
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<ModeWatcher />
<Navbar />

<slot />
