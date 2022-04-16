import Link from 'next/link';
import { FC } from 'react';

import { IAuthor } from '../interfaces/author';

import { Avatar } from './avatar';
import { DateFormatter } from './date-formatter';
import { CoverImage } from './cover-image';

interface IPostPreviewProps {
    readonly title: string;
    readonly coverImage: string;
    readonly date: string;
    readonly excerpt: string;
    readonly author: IAuthor;
    readonly slug: string;
}

export const PostPreview: FC<IPostPreviewProps> = ({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug
}) => {
    return (
        <div>
            <div className='mb-5'>
                <CoverImage slug={slug} title={title} src={coverImage} />
            </div>
            <h3 className='text-3xl mb-3 leading-snug'>
                <Link as={`/posts/${slug}`} href='/posts/[slug]'>
                    <a className='hover:underline'>{title}</a>
                </Link>
            </h3>
            <div className='text-lg mb-4'>
                <DateFormatter dateString={date} />
            </div>
            <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
        </div>
    );
};
