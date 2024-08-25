<script>
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import '@fontsource-variable/grandstander'; // weights 100-900;
	import Navbar from '$lib/components/navigation/Navbar.svelte';
</script>

<ModeWatcher />
<Navbar />

<slot />
