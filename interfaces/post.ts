import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { IPostMetadata } from './post-metadata';

export interface IPost {
    readonly mdxSource: MDXRemoteSerializeResult;
    readonly metadata: IPostMetadata;
}
