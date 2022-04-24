import { FC } from 'react';

import markdownStyles from './markdown.module.css';

interface INoteBodyProps {
    readonly content: string;
}

export const NoteBody: FC<INoteBodyProps> = ({ content }) => {
    return (
        <div className='max-w-2xl mx-auto'>
            <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
};
