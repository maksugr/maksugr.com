import Link from 'next/link';
import { FC } from 'react';

interface INotePreviewProps {
    readonly title: string;
    readonly slug: string;
}

export const NotePreview: FC<INotePreviewProps> = ({ title, slug }) => {
    return (
        <div className='mb-10'>
            <h3 className='text-xl font-bold lowercase'>
                <Link as={`/notes/${slug}`} href='/notes/[slug]'>
                    <a className='hover:text-amber-300 transition-colors'>
                        {title}
                    </a>
                </Link>
            </h3>
        </div>
    );
};
