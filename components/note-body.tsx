import { FC } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { MDXComponents } from './mdx-components';

interface INoteBodyProps {
    readonly mdxSource: MDXRemoteSerializeResult;
}

export const NoteBody: FC<INoteBodyProps> = ({ mdxSource }) => {
    return <MDXRemote {...mdxSource} components={MDXComponents} />;
};
