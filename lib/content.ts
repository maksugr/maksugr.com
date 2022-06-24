import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import readingTime from 'reading-time';
import { parseISO } from 'date-fns';

import { IContent } from '../interfaces/content';
import { IContentFile } from '../interfaces/content-file';
import { ContentTypeEnum } from '../enums/content-type';

import serializeContent from './mdx';

const root = process.cwd();

export const CONTENT_DIR = 'content';

const getContentRaw = (
    type: ContentTypeEnum,
    slug: string
): matter.GrayMatterFile<string> => {
    const contentSource = fs.readFileSync(
        getContentPath(type, `${slug}.mdx`),
        'utf8'
    );

    return matter(contentSource);
};

export const getContentFiles = (type: ContentTypeEnum): IContentFile[] =>
    fs.readdirSync(getContentPath(type)).map((fileName) => {
        return {
            fileName,
            slug: fileName.replace('.mdx', '')
        };
    });

export const getContent = async (
    type: ContentTypeEnum,
    slug: string
): Promise<IContent> => {
    const { data, content } = getContentRaw(type, slug);

    const mdxSource = await serializeContent(content);
    const { title, summary, publishedAt } = data;

    return {
        mdxSource,
        metadata: {
            slug,
            title,
            summary,
            publishedAt,
            readingTime: `${Math.round(readingTime(content).minutes)} min`
        }
    };
};

export const getContents = async (
    type: ContentTypeEnum,
    limit?: number
): Promise<IContent[]> => {
    const contentFiles = getContentFiles(type);

    const content = await Promise.all(
        contentFiles.map((contentFile) => getContent(type, contentFile.slug))
    );

    const sortedContent = content.sort(
        (a, b) =>
            parseISO(b.metadata.publishedAt).getTime() -
            parseISO(a.metadata.publishedAt).getTime()
    );

    return limit ? sortedContent.slice(0, limit) : sortedContent;
};

const getContentPath = (...pathElements: string[]): string => {
    return path.join(root, CONTENT_DIR, ...pathElements);
};
