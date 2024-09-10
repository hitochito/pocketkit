import type { Site, SocialObjects } from '$lib/types';
import { images } from '$lib/assets';

export const SITE: Site = {
	author: 'Hitochito',
	website: 'https://kingopoly.vercel.app/', // replace this with your deployed domain
	ogImage: images.ogImageHome,
	profile: 'https://hitochito.vercel.app/about/',
	desc: 'Play an exciting Monopoly-style board game online where you roll dice, buy properties, and strategize with friends in real-time.',
	title: 'Kingopoly' // Means control, rule, ownership etc in latin
};

export const LOCALE = {
	lang: 'en', // html lang code. Set this empty and default will be "en"
	langTag: ['en-EN'] // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
	enable: false,
	svg: false,
	width: 40,
	height: 40
};

export const SOCIALS: SocialObjects = [
	{
		name: 'Github',
		href: 'https://github.com/hitochito',
		linkTitle: `Check out ${SITE.title} on Github`,
		active: true
	},
	{
		name: 'Facebook',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Facebook`,
		active: false
	},
	{
		name: 'Instagram',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Instagram`,
		active: false
	},
	{
		name: 'LinkedIn',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on LinkedIn`,
		active: false
	},
	{
		name: 'Mail',
		href: 'mailto:hitochito0@gmail.com',
		linkTitle: `Send an email to ${SITE.title}`,
		active: true
	},
	{
		name: 'Twitter',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Twitter`,
		active: false
	},
	{
		name: 'Twitch',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Twitch`,
		active: false
	},
	{
		name: 'YouTube',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on YouTube`,
		active: false
	},
	{
		name: 'WhatsApp',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on WhatsApp`,
		active: false
	},
	{
		name: 'Snapchat',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Snapchat`,
		active: false
	},
	{
		name: 'Pinterest',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Pinterest`,
		active: false
	},
	{
		name: 'TikTok',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on TikTok`,
		active: false
	},
	{
		name: 'CodePen',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on CodePen`,
		active: false
	},
	{
		name: 'Discord',
		href: 'https://discord.com/users/1193190984016736327',
		linkTitle: `Chat with ${SITE.title} on Discord`,
		active: true
	},
	{
		name: 'GitLab',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on GitLab`,
		active: false
	},
	{
		name: 'Reddit',
		href: 'https://reddit.com/u/hitochito',
		linkTitle: `Find ${SITE.title} on Reddit`,
		active: true
	},
	{
		name: 'Skype',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Skype`,
		active: false
	},
	{
		name: 'Steam',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Steam`,
		active: false
	},
	{
		name: 'Telegram',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Telegram`,
		active: false
	},
	{
		name: 'Mastodon',
		href: 'https://github.com/satnaing/astro-paper',
		linkTitle: `${SITE.title} on Mastodon`,
		active: false
	}
];
