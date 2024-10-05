import '~/tailwind.css';

import { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { Links, Meta, MetaFunction, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import clsx from 'clsx';
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from 'remix-themes';

import { themeSessionResolver } from './lib/.server/sessions/theme-session-storage';
import { CLIENT } from './lib/constants/config';

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.png',
            type: 'image/png',
        },
        {
            rel: 'preload',
            href: '/logo-dark.png',
            as: 'image',
        },
        {
            rel: 'preload',
            href: '/logo-light.png',
            as: 'image',
        },
    ];
};

export const meta: MetaFunction = () => {
    return [
        // Basic Meta Tags
        { title: CLIENT.name },
        { description: CLIENT.description },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
        },
        {
            name: 'robots',
            content: 'index, follow',
        },
        {
            name: 'language',
            content: 'English',
        },
        {
            name: 'author',
            content: 'Mukesh Singh',
        },
        {
            name: 'keywords',
            content: CLIENT.keywords, // Ensure you have this defined in your CLIENT object
        },

        // Open Graph Tags
        {
            property: 'og:title',
            content: CLIENT.name,
        },
        {
            property: 'og:description',
            content: CLIENT.description,
        },
        {
            property: 'og:image',
            content: '/og-image.png',
        },
        {
            property: 'og:image:alt',
            content: `${CLIENT.name} preview image`,
        },
        {
            property: 'og:image:width',
            content: '1200', // Adjust based on your actual image dimensions
        },
        {
            property: 'og:image:height',
            content: '630', // Adjust based on your actual image dimensions
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            property: 'og:url',
            content: 'https://shield.rs',
        },
        {
            property: 'og:locale',
            content: 'en_US',
        },
        {
            property: 'og:site_name',
            content: CLIENT.name,
        },

        // Twitter Card Tags
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:site',
            content: '@shield_auth',
        },
        {
            name: 'twitter:creator',
            content: '@MKSingh_Dev',
        },
        {
            name: 'twitter:title',
            content: CLIENT.name,
        },
        {
            name: 'twitter:description',
            content: CLIENT.description,
        },
        {
            name: 'twitter:image',
            content: '/og-image.png',
        },
        {
            name: 'twitter:image:alt',
            content: `${CLIENT.name} preview image`,
        },

        // Apple Mobile Web App Meta Tags (if you're making a PWA)
        {
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
        },
        {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black-translucent',
        },
        {
            name: 'apple-mobile-web-app-title',
            content: CLIENT.name,
        },

        // Theme Color for browsers
        {
            name: 'theme-color',
            content: '#FF4C00',
        },

        // Canonical URL
        {
            tagName: 'link',
            rel: 'canonical',
            href: 'https://shield.rs',
        },
    ];
};

export async function loader({ request }: LoaderFunctionArgs) {
    const { getTheme } = await themeSessionResolver(request);
    return {
        theme: getTheme(),
    };
}

export default function AppWithProviders() {
    const data = useLoaderData<typeof loader>();
    return (
        <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
            <App />
        </ThemeProvider>
    );
}

export function App() {
    const data = useLoaderData<typeof loader>();
    const [theme] = useTheme();
    return (
        <html lang="en" className={clsx(theme)}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
                <Links />
            </head>
            <body className="flex flex-col min-h-svh antialiased bg-background-base overflow-x-hidden">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
