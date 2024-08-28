# Re-create this boilerplate

## 1. Create a new Sveltekit project

```shell
  pnpm create svelte@latest {app_name}
  # Options to choose:
  # Svelte App Template
  # Skeleton project
  # TypeScript
  # Eslint
  # Prettier

  cd {app_name}
  pnpm install
  git init; git add -A; git commit -m "Initial commit"
  git branch -M main
  git add remote origin {repo_url}
  git push -u origin main

  # Finally Host it on Vercel ({app_name}.vercel.app)
```

## 2. Add Iconify- Icon Library & Component

Install Iconify-Icon (Web Component):

```shell
  pnpm install iconify-icon
```

Icon Utility to maintain imports in one place is located at `$components/ui/Icon.svelte`

## 3. Add TailwindCSS

Initialize TailwindCSS

```shell
  pnpm install -D tailwindcss postcss autoprefixer
  pnpx tailwindcss init -p
```

Enable usage of POSTCSS in `svelte.config.js`

```js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: vitePreprocess()
};
export default config;
```

Configure your template paths in `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
};
```

Create a `./src/app.css` file and add the @tailwind directives for each of Tailwind’s layers.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Create a `./src/routes/+layout.svelte` file and import the newly-created app.css file.

```svelte
<script>
	import '../app.css';
</script>

<slot />
```

## 4. Install & Preload Fonts

Choose a font from [FontSource](https://fontsource.org).
Install the font using pnpm (command available on FontSource).
Import the font in `src/+layout.svelte` (create it), for example:

```svelte
<script>
	import '../app.css';
	import '@fontsource-variable/grandstander'; // weights 100-900;
</script>

<slot />
```

Add the font to `tailwind.config.js` under `theme.extend.fontFamily`:

```js
fontFamily: {
	// sans is the default font family,
	// you can also use other custom font-families
	// using custom: ['custom-font-family']
	sans: ['Grandstander Variable'];
}
```

Make sure to preload the font by creating a `hooks.server.ts` file under `src` and adding the following lines:

```ts
import { sequence } from '@sveltejs/kit/hooks';
import { type Handle } from '@sveltejs/kit';

const preloadFonts: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		preload: ({ type }) => type === 'font'
	});
	return response;
};

export const handle = sequence(preloadFonts);
```

Here are some good default fonts suggestions:

- [Inter Variable](https://fontsource.org/fonts/inter)
- [Lexend Variable](https://fontsource.org/fonts/lexend)
- [Outfit Variable](https://fontsource.org/fonts/outfit)
- [Grandstander Variable](https://fontsource.org/fonts/grandstander)

## 5. Setup Shadcn-Svelte (Uses Bits-UI Melt-UI & TailwindCSS)

First Setup Dark-Mode uisng Mode-Watcher:

```shell
pnpm install mode-watcher
```

Add it to `src/routes/+layout.svelte`

```svelte
<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource-variable/grandstander'; // weights 100-900;
</script>

<ModeWatcher />

<slot />
```

Run The CLI:

```shell
pnpx shadcn-svelte@latest init
# It will ask you these questions:
# Would you like to use TypeScript (recommended)? › Yes
# Which style would you like to use? › Default
# Which color would you like to use as base color? › Slate
# Where is your global CSS file? › src/app.css
# Where is your tailwind.config.[cjs|js|ts] located? › tailwind.config.js
# Configure the import alias for components: › $lib/components
# Configure the import alias for utils: › $lib/utils

# Add a Button Component:
pnpx shadcn-svelte@latest add button
```

Add a Mode-Toggle Component To Switch Theme to `$lib/components/navigation/ModeToggle.svelte`:

```svelte
<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import Icon from '$lib/components/ui/icons/Icon.svelte';
</script>

<Button onclick={toggleMode} variant="outline" size="icon">
	<Icon
		icon="sun"
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
	/>
	<Icon
		icon="moon"
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>
```

This should be your new `app.css` file, to change the theme, simply go to [Shadcn-Svelte Themes](https://www.shadcn-svelte.com/themes) and copy the theme code to `app.css`.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	:root {
		--background: 0 0% 100%;
		--foreground: 222.2 84% 4.9%;

		--muted: 210 40% 96.1%;
		--muted-foreground: 215.4 16.3% 46.9%;

		--popover: 0 0% 100%;
		--popover-foreground: 222.2 84% 4.9%;

		--card: 0 0% 100%;
		--card-foreground: 222.2 84% 4.9%;

		--border: 214.3 31.8% 91.4%;
		--input: 214.3 31.8% 91.4%;

		--primary: 222.2 47.4% 11.2%;
		--primary-foreground: 210 40% 98%;

		--secondary: 210 40% 96.1%;
		--secondary-foreground: 222.2 47.4% 11.2%;

		--accent: 210 40% 96.1%;
		--accent-foreground: 222.2 47.4% 11.2%;

		--destructive: 0 72.2% 50.6%;
		--destructive-foreground: 210 40% 98%;

		--ring: 222.2 84% 4.9%;

		--radius: 0.5rem;
	}

	.dark {
		--background: 222.2 84% 4.9%;
		--foreground: 210 40% 98%;

		--muted: 217.2 32.6% 17.5%;
		--muted-foreground: 215 20.2% 65.1%;

		--popover: 222.2 84% 4.9%;
		--popover-foreground: 210 40% 98%;

		--card: 222.2 84% 4.9%;
		--card-foreground: 210 40% 98%;

		--border: 217.2 32.6% 17.5%;
		--input: 217.2 32.6% 17.5%;

		--primary: 210 40% 98%;
		--primary-foreground: 222.2 47.4% 11.2%;

		--secondary: 217.2 32.6% 17.5%;
		--secondary-foreground: 210 40% 98%;

		--accent: 217.2 32.6% 17.5%;
		--accent-foreground: 210 40% 98%;

		--destructive: 0 62.8% 30.6%;
		--destructive-foreground: 210 40% 98%;

		--ring: hsl(212.7, 26.8%, 83.9);
	}
}

@layer base {
	* {
		@apply border-border;
	}
	body {
		@apply bg-background font-sans text-foreground;
	}
}
```

This should be your new `tailwind.config.js` file:

```js
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				// sans is the default font family,
				// you can also use other custom font-families
				// using custom: ['custom-font-family']
				sans: ['Grandstander Variable']
			}
		}
	}
};

export default config;
```

## 6. Default Components & Utilities

Some Default Components & Utilities Are Added In `src/lib` directory.
Make sure to copy them over or make your own to copy this boilerplate.

## 7. Navigation Config

Navigation Config is located at `src/lib/config/navigation.ts`
All the routes & navigation items are defined here. And the main Navbar Component is located at `src/routes/Navbar.svelte`. Modifiy them as needed to fit your needs.

## 8. Enhanced Image

For Static Images, `@sveltejs/enhanced-img` vite plugin is used. you may use Vite's built-in handling to provide images for `<meta>` tags, display images on your homepage with `<enhanced:img>` or use the `enhanced:img` directive in your Svelte templates.

```svelte
<script lang="ts">
	import welcome from '$lib/images/welcome.webp?enhanced';
</script>

<enhanced:img src={welcome} alt="Welcome to PocketKit" />
```

For Other Images, `@unpic/svelte` is used. It's a CDN-agnostic library with support for a large number of providers.

```svelte
<script lang="ts">
	import { Image } from '@unpic/svelte';
</script>

	<Image
		src="https://i.ibb.co/n6GM3rt/welcome.webp"
		alt="Welcome to PocketKit"

		<!-- For High Priority Images -->
		fetchpriority="high"
		<!-- Loads Image Immediately -->
		loading="eager"

		<!-- Width & Height are required -->
		width={800}
		height={600}
	/>
```

## 9. Icons

For Icons, `iconify-icon` is used. It's a webcomponent library that provides a large number of icons that can be used in your Svelte templates. I have created a wrapper component for it at `$lib/components/Iconify.svelte` to make it more SvelteKit friendly. You can use ssr and all the other features of SvelteKit with it. One thing to note though is that you need to import the icons as variables and use them in the `icon` prop. Also if you're creating an web app that needs to work offline, you might want to use the `iconify-icon/svelte` library instead. `iconify-icon` loads the icons asynchronously and requires a CDN to work, then it caches the icons in the browser's local storage, so it's not really the best solution for web apps that need to work offline. Learn more [here](https://icon-sets.iconify.design/)

```svelte
<script lang="ts">
	import { Icon } from '$lib/components/Iconify.svelte';
</script>
```

## 10. Bundle Analysis

This project uses `rollup-plugin-visualizer` to generate a visual representation of the bundle size. This helps in analyzing and optimizing the application's performance.

### How to Use

1. The visualizer is configured in `vite.config.ts`.

2. To generate the bundle analysis, run the build command:

   ```shell
   pnpm build
   ```

3. After the build completes, a file named `bundle-analysis.html` will be generated in the `./stats` directory.

4. Open this file in a web browser to view the bundle analysis.

### Configuration

The visualizer is configured with the following options:

- `open: true`: Automatically opens the analysis in your default browser after build.
- `filename: './stats/bundle-analysis.html'`: Specifies the output location and filename.

You can modify these options in `vite.config.ts` if needed.

### Interpreting the Results

The bundle analysis provides a treemap visualization of your application's bundle size. Each rectangle represents a module, and its size corresponds to the module's relative size in the bundle.

Use this information to:

- Identify large dependencies
- Find opportunities for code splitting
- Optimize imports and reduce bundle size

Remember to analyze the results in the context of your application's specific needs and performance goals.
