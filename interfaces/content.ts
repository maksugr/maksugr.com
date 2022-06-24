import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { IContentMetadata } from './content-metadata';

export interface IContent {
    readonly mdxSource: MDXRemoteSerializeResult;
    readonly metadata: IContentMetadata;
}
