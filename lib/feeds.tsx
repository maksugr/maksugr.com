import fs from 'fs';

import { parseISO } from 'date-fns';
import RSS from 'rss';

import { IContent } from '../interfaces/content';
import { ContentTypeEnum } from '../enums/content-type';

import {
    AUTHOR_NAME,
    BASE_URL,
    COPYRIGHT,
    DEFAULT_DESCRIPTION,
    DEFAULT_TITLE
} from './constants';
import { getContents } from './content';

const buildFeed = () => {
    return new RSS({
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        feed_url: `${BASE_URL}/feeds/rss.xml`,
        site_url: BASE_URL,
        image_url: `${BASE_URL}/og/image.png?2`,
        managingEditor: AUTHOR_NAME,
        webMaster: AUTHOR_NAME,
        copyright: COPYRIGHT,
        language: 'en',
        categories: [
            'tech',
            'software development',
            'web development',
            'programming',
            'programming languages'
        ]
    });
};

const makeFeedItem = (content: IContent) => {
    const url = `${BASE_URL}/${ContentTypeEnum.POSTS}/${content.metadata.slug}`;

    return {
        title: content.metadata.title,
        description: content.metadata.summary,
        url,
        author: AUTHOR_NAME,
        date: parseISO(content.metadata.publishedAt)
    };
};

export const generateMainFeeds = async (): Promise<void> => {
    const feed = buildFeed();
    const posts = await getContents(ContentTypeEnum.POSTS);

    posts.forEach((post) => feed.item(makeFeedItem(post)));

    fs.mkdirSync('public/feeds/', { recursive: true });

    fs.writeFileSync('public/feeds/rss.xml', feed.xml());
};

export default buildFeed;
