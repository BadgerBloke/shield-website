import { createCookieSessionStorage } from '@remix-run/node';
import { createThemeSessionResolver } from 'remix-themes';

import { CLIENT } from '~/lib/constants/config';

import { SECRETS } from '../constants/config';

const isProduction = process.env.NODE_ENV === 'production';

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: 'theme',
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secrets: [SECRETS.signingSecret],
        ...(isProduction ? { domain: CLIENT.domain, secure: true } : {}),
    },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
