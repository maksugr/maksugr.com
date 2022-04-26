import { format } from 'date-fns';
import Link from 'next/link';
import { FC } from 'react';

import { IPostMetadata } from '../interfaces/post-metadata';

interface INotePreviewProps {
    readonly noteMetadata: IPostMetadata;
}

export const NotePreview: FC<INotePreviewProps> = ({ noteMetadata }) => {
    const { title, readingTime, publishedAt, slug } = noteMetadata;

    console.log(readingTime, publishedAt);

    return (
        <div className='mb-10'>
            <h3 className='text-2xl lowercase'>
                <Link as={`/notes/${slug}`} href='/notes/[slug]'>
                    <a className='hover:text-amber-300 transition-colors'>
                        {title}
                    </a>
                </Link>
            </h3>
            <p className='text-xs text-gray-500 font-thin'>
                {format(new Date(publishedAt), 'MMMM dd, yyyy')} • {readingTime}
            </p>
        </div>
    );
};
