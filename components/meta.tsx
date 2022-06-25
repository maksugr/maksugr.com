import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import {
    AUTHOR_NAME,
    BASE_URL,
    DEFAULT_DESCRIPTION,
    DEFAULT_TITLE,
    DOMAIN
} from '../lib/constants';

export interface IMetaProps {
    readonly title?: string;
    readonly description?: string;
    readonly type?: 'website' | 'article';
}

const defaultProps: IMetaProps = {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    type: 'website'
};

export const Meta: FC<IMetaProps> = (props) => {
    const router = useRouter();

    const meta = {
        ...defaultProps,
        ...props
    };

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
            <link rel='manifest' href='/site.webmanifest' />
            <meta name='msapplication-config' content='browserconfig.xml' />
            <meta name='msapplication-TileColor' content='#ffffff' />
            <meta name='theme-color' content='#ffffff' />
            <meta name='description' content={meta.description} />
            <meta name='author' content={AUTHOR_NAME} />
            <meta name='robots' content='follow, index' />
            <link rel='canonical' href={`${BASE_URL}${router.asPath}`} />
            <meta property='og:image' content={`${BASE_URL}/og/image.png?2`} />
            <meta property='og:url' content={`${BASE_URL}${router.asPath}`} />
            <meta property='og:type' content={meta.type} />
            <meta property='og:site_name' content={DOMAIN} />
            <meta property='og:description' content={meta.description} />
            <meta property='og:title' content={meta.title} />
            <meta property='twitter:title' content={meta.title} />
            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:site' content='@maksugr' />
            <meta property='twitter:description' content={meta.description} />
            <meta
                property='twitter:image'
                content={`${BASE_URL}/og/image.png?2`}
            />
            <meta name='key' content={DOMAIN} />
            <title>{meta.title}</title>
            <link
                rel='alternate'
                type='application/rss+xml'
                title={`${meta.title} RSS feed`}
                href='/feeds/rss.xml'
            />
        </Head>
    );
};
