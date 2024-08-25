<script lang="ts">
	import 'iconify-icon';

	const icons = {
		menu: 'ic:sharp-menu'
		// Add more icons here as needed
	} as const;
	type IconName = keyof typeof icons;

	export let icon: IconName;
	export let size = '1em';
	export let color = 'currentColor';
</script>

<svelte:element this={'iconify-icon'} icon={icons[icon]} {size} {color} {...$$restProps} />
