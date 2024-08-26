export const navigation = {
	routes: {
		home: '/',
		about: '/about',
		services: '/services',
		contact: '/contact'
	},
	items: [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/contact', label: 'Contact' }
	]
} as const;

export type NavItem = (typeof navigation.items)[number];
