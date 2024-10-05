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
        { title: CLIENT.name },
        {
            property: 'og:title',
            content: CLIENT.name,
        },
        {
            name: 'description',
            content: CLIENT.description,
        },
        {
            property: 'og:description',
            content: CLIENT.description,
        },
        {
            itemprop: 'name',
            content: CLIENT.name,
        },
        {
            'http-equiv': 'Content-Type',
            content: 'text/html; charset=utf-8',
        },
        {
            property: 'og:site_name',
            content: CLIENT.name,
        },
        {
            content: 'width=device-width, initial-scale=1',
            name: 'viewport',
        },
        {
            property: 'og:image',
            content: '/og-image.png',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            property: 'og:url',
            content: CLIENT.host,
        },
        {
            property: 'og:locale',
            content: 'en_US',
        },
        {
            name: 'twitter:card',
            content: 'summary',
        },
        {
            name: 'twitter:site',
            content: '@shield_auth',
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
