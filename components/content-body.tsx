import { FC } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { MDXComponents } from './markdown';
import markdownStyles from './markdown/styles.module.css';

interface IContentBodyProps {
    readonly mdxSource: MDXRemoteSerializeResult;
}

export const ContentBody: FC<IContentBodyProps> = ({ mdxSource }) => {
    return (
        <article className={markdownStyles['markdown']}>
            <MDXRemote {...mdxSource} components={MDXComponents} />
        </article>
    );
};
