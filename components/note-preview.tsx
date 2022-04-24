import Link from 'next/link';
import { FC } from 'react';

interface INotePreviewProps {
    readonly title: string;
    readonly slug: string;
}

export const NotePreview: FC<INotePreviewProps> = ({ title, slug }) => {
    return (
        <div className='mb-10'>
            <h3 className='text-3xl uppercase'>
                <Link as={`/notes/${slug}`} href='/notes/[slug]'>
                    <a className='hover:opacity-70'>{title}</a>
                </Link>
            </h3>
        </div>
    );
};
