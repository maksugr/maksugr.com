import Head from 'next/head';
import { FC } from 'react';

import { AUTHOR_NAME, DEFAULT_DESCRIPTION } from '../lib/constants';

export const Meta: FC = () => {
    return (
        <Head>
            <link
                rel='apple-touch-icon'
                sizes='180x180'
                href='/favicon/apple-touch-icon.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='32x32'
                href='/favicon/favicon-32x32.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='16x16'
                href='/favicon/favicon-16x16.png'
            />
            <link
                rel='mask-icon'
                href='/favicon/safari-pinned-tab.svg'
                color='#000000'
            />
            <link rel='shortcut icon' href='/favicon/favicon.ico' />
            <link rel='manifest' href='site.webmanifest' />
            <meta name='msapplication-config' content='browserconfig.xml' />
            <meta name='msapplication-TileColor' content='#ffffff' />
            <meta name='theme-color' content='#ffffff' />
            <meta name='description' content={DEFAULT_DESCRIPTION} />
            <meta property='og:image' content='/og/image.png' />
            <link
                rel='alternate'
                type='application/rss+xml'
                title={`${AUTHOR_NAME} RSS feed`}
                href='/feeds/feed.xml'
            />
            <link
                rel='alternate'
                type='application/atom+xml'
                title={`${AUTHOR_NAME} Atom feed`}
                href='/feeds/atom.xml'
            />
            <link
                rel='alternate'
                type='application/feed+json'
                title={`${AUTHOR_NAME} JSON feed`}
                href='/feeds/feed.json'
            />
        </Head>
    );
};
