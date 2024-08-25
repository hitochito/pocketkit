<script lang="ts">
	import 'iconify-icon';

	const icons = {
		sun: 'ion:sun',
		menu: 'ion:menu',
		moon: 'ion:moon'
		// Add more icons here as needed
	} as const;
	type IconName = keyof typeof icons;

	export let icon: IconName;
	export let size = '1em';
	export let color = 'currentColor';
</script>

<svelte:element this={'iconify-icon'} icon={icons[icon]} {size} {color} {...$$restProps} />

<style lang="postcss">
	:global(iconify-icon) {
		/* Iconify Web component is not rendered instantly. There could be a few milliseconds delay.
		This is caused by JavaScript. Web component cannot be rendered until it is loaded and registered.
		Because of web component spec. Rendering is done asynchronously in browser, often causing a delay.
		This might cause layout shift. To avoid layout shift, add this to your CSS: */
		display: inline-block;
		width: 1em;
		height: 1em;
	}
</style>
