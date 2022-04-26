import fs from 'fs';

import { Feed, Item } from 'feed';
import ReactDOMServer from 'react-dom/server';
import makeTitle from 'title';
import { parseISO } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
import { stripHtml } from 'string-strip-html';

import { MDXComponents } from '../components/mdx-components';
import { IPost } from '../interfaces/post';

import { BASE_URL, COPYRIGHT } from './constants';
import { getPosts } from './posts';

const buildFeed = (): Feed => {
    return new Feed({
        title: 'Roman Ponomarev',
        description: 'Personal site of Roman Ponomarev',
        id: 'https://maksugr.com/',
        link: 'https://maksugr.com/',
        language: 'en',
        image: `${BASE_URL}/images/banner.png`,
        favicon: `${BASE_URL}/favicons/banner.png`,
        copyright: COPYRIGHT,
        generator: 'NextJS + feed package',
        feedLinks: {
            json: `${BASE_URL}/feeds/feed.json`,
            atom: `${BASE_URL}/feeds/atom.xml`,
            rss2: `${BASE_URL}/feeds/feed.xml`
        },
        author: {
            name: 'Roman Ponomarev',
            email: 'maksugr@gmail.com',
            link: 'https://maksugr.com/'
        }
    });
};

const makeFeedItem = (post: IPost): Item => {
    const url = `${BASE_URL}/writings/${post.metadata.slug}`;
    const htmlContent = ReactDOMServer.renderToStaticMarkup(
        <MDXRemote {...post.mdxSource} components={MDXComponents} />
    )
        .replace(/href="\/#/g, `href="${url}#`)
        .replace(/href="\//g, `href="${BASE_URL}/`)
        .replace(/src="\//g, `src="${BASE_URL}/`);
    const cleanHtmlContent = stripHtml(htmlContent, {
        onlyStripTags: ['script', 'style'],
        stripTogetherWithTheirContents: ['script', 'style']
    }).result;
    return {
        title: makeTitle(post.metadata.title),
        link: url,
        id: url,
        date: parseISO(post.metadata.publishedAt),
        description: post.metadata.summary,
        content: cleanHtmlContent
    };
};

export const generateMainFeeds = async (): Promise<void> => {
    const feed = buildFeed();
    const posts = await getPosts('notes');
    posts.forEach((post) => feed.addItem(makeFeedItem(post)));
    fs.mkdirSync('public/feeds/', { recursive: true });
    fs.writeFileSync('public/feeds/feed.xml', feed.rss2());
    fs.writeFileSync('public/feeds/feed.json', feed.json1());
    fs.writeFileSync('public/feeds/atom.xml', feed.atom1());
};

export default buildFeed;
