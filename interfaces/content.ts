import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { ContentTypeEnum } from '../enums/content-type';

import { IContentMetadata } from './content-metadata';

export interface IContent {
    readonly type: ContentTypeEnum;
    readonly mdxSource: MDXRemoteSerializeResult;
    readonly metadata: IContentMetadata;
}
