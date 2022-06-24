import fs from 'fs';

import { Feed, Item } from 'feed';
import ReactDOMServer from 'react-dom/server';
import { parseISO } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
import { stripHtml } from 'string-strip-html';

import { MDXComponents } from '../components/markdown';
import { IContent } from '../interfaces/content';
import { ContentTypeEnum } from '../enums/content-type';

import {
    AUTHOR_EMAIL,
    AUTHOR_NAME,
    BASE_URL,
    COPYRIGHT,
    DEFAULT_DESCRIPTION,
    DEFAULT_TITLE
} from './constants';
import { getContents } from './content';

const buildFeed = (): Feed => {
    return new Feed({
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        id: BASE_URL,
        link: BASE_URL,
        language: 'en',
        image: `${BASE_URL}/og/image.png`,
        favicon: `${BASE_URL}/favicons/favicon.ico`,
        copyright: COPYRIGHT,
        generator: 'NextJS + feed package',
        feedLinks: {
            json: `${BASE_URL}/feeds/feed.json`,
            atom: `${BASE_URL}/feeds/atom.xml`,
            rss2: `${BASE_URL}/feeds/feed.xml`
        },
        author: {
            name: AUTHOR_NAME,
            email: AUTHOR_EMAIL,
            link: BASE_URL
        }
    });
};

const makeFeedItem = (content: IContent): Item => {
    const url = `${BASE_URL}/${ContentTypeEnum.POSTS}/${content.metadata.slug}`;

    const htmlContent = ReactDOMServer.renderToStaticMarkup(
        <MDXRemote {...content.mdxSource} components={MDXComponents} />
    )
        .replace(/href="\/#/g, `href="${url}#`)
        .replace(/href="\#/g, `href="${url}#`)
        .replace(/href="\//g, `href="${BASE_URL}/`)
        .replace(/src="\//g, `src="${BASE_URL}/`);

    const cleanHtmlContent = stripHtml(htmlContent, {
        onlyStripTags: ['script', 'style'],
        stripTogetherWithTheirContents: ['script', 'style']
    }).result;

    return {
        title: content.metadata.title,
        id: url,
        link: url,
        description: content.metadata.summary,
        date: parseISO(content.metadata.publishedAt),
        content: cleanHtmlContent
    };
};

export const generateMainFeeds = async (): Promise<void> => {
    const feed = buildFeed();
    const posts = await getContents(ContentTypeEnum.POSTS);

    posts.forEach((post) => feed.addItem(makeFeedItem(post)));

    fs.mkdirSync('public/feeds/', { recursive: true });

    fs.writeFileSync('public/feeds/feed.xml', feed.rss2());
    fs.writeFileSync('public/feeds/feed.json', feed.json1());
    fs.writeFileSync('public/feeds/atom.xml', feed.atom1());
};

export default buildFeed;
