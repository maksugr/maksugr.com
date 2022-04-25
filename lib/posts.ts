import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import readingTime from 'reading-time';
import { parseISO } from 'date-fns';

import { IPost } from '../interfaces/post';
import { IPostFile } from '../interfaces/post-file';

import { titleCase } from './title-case';
import serializePost from './mdx';

const root = process.cwd();

export const POSTS_DIR = 'posts';
export type PostType = 'notes' | 'topics';

const getPostRaw = (
    type: PostType,
    slug: string
): matter.GrayMatterFile<string> => {
    const postSource = fs.readFileSync(postsPath(type, `${slug}.mdx`), 'utf8');
    return matter(postSource);
};

export const getPostFiles = (type: PostType): IPostFile[] =>
    fs.readdirSync(postsPath(type)).map((fileName) => {
        return {
            fileName,
            slug: fileName.replace('.mdx', '')
        };
    });

export const getPost = async (type: PostType, slug: string): Promise<IPost> => {
    const { data, content } = getPostRaw(type, slug);

    const mdxSource = await serializePost(content);
    const { title, summary, topics, publishedAt } = data;

    return {
        mdxSource,
        metadata: {
            slug,
            title: titleCase(title),
            summary,
            topics,
            publishedAt,
            readingTime: readingTime(content).text
        }
    };
};

export const getPosts = async (
    type: PostType,
    limit?: number
): Promise<IPost[]> => {
    const postFiles = getPostFiles(type);

    const posts = await Promise.all(
        postFiles.map((postFile) => getPost(type, postFile.slug))
    );

    const sortedPosts = posts.sort(
        (a, b) =>
            parseISO(b.metadata.publishedAt).getTime() -
            parseISO(a.metadata.publishedAt).getTime()
    );

    return limit ? sortedPosts.slice(0, limit) : sortedPosts;
};

export const postsPath = (...pathElements: string[]): string => {
    return path.join(root, POSTS_DIR, ...pathElements);
};
