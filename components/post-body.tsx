import { FC } from 'react';

import markdownStyles from './markdown-styles.module.css';

interface IPostBodyProps {
    readonly content: string;
}

export const PostBody: FC<IPostBodyProps> = ({ content }) => {
    return (
        <div className='max-w-2xl mx-auto'>
            <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
};
