import { FC } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { MDXComponents } from './markdown';
import markdownStyles from './markdown/styles.module.css';

interface INoteBodyProps {
    readonly mdxSource: MDXRemoteSerializeResult;
}

export const NoteBody: FC<INoteBodyProps> = ({ mdxSource }) => {
    return (
        <article className={markdownStyles['markdown']}>
            <MDXRemote {...mdxSource} components={MDXComponents} />
        </article>
    );
};
