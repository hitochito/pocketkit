<script lang="ts">
	import 'iconify-icon';

	const icons = {
		moon: 'lucide:moon',
		sun: 'lucide:sun',
		x: 'lucide:x',
		menu: 'lucide:menu',
		svelte: 'logos:svelte-icon',
		github: 'logos:github-icon'
		// Add more icons here as needed
	} as const;
	type IconName = keyof typeof icons;

	export let icon: IconName;
	export let color = 'currentColor';
	export let className: string = '';
	export { className as class };
</script>

<svelte:element
	this={'iconify-icon'}
	class={className}
	icon={icons[icon]}
	{color}
	{...$$restProps}
/>

<style lang="postcss">
	:global(iconify-icon) {
		/* Iconify Web component is not rendered instantly. There could be a few milliseconds delay.
		This is caused by JavaScript. Web component cannot be rendered until it is loaded and registered.
		Because of web component spec. Rendering is done asynchronously in browser, often causing a delay.
		This might cause layout shift. To avoid layout shift, add this to your CSS: */
		display: inline-block;
		vertical-align: -0.19em; /* default: -0.125em https://iconify.design/docs/iconify-icon/inline.html */
		width: 1em;
		height: 1em;
	}
</style>
