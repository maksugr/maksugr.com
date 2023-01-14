import Link from 'next/link';
import { FC } from 'react';

import { ContentTypeEnum } from '../enums/content-type';
import { IContentMetadata } from '../interfaces/content-metadata';

interface IContentPreviewProps {
    readonly type: ContentTypeEnum;
    readonly metadata: IContentMetadata;
}

export const ContentPreview: FC<IContentPreviewProps> = ({
    type,
    metadata
}) => {
    const { title, readingTime, publishedAt, slug } = metadata;

    return (
        <div className='flex items-center'>
            <h3 className='text-lg mr-2'>
                <Link
                    as={`/${type}/posts/${slug}`}
                    href={`/${type}/posts/[slug]`}
                >
                    {title}
                </Link>
            </h3>
            <p className='text-[0.6rem] text-gray'>
                [{publishedAt} • {readingTime}]
            </p>
        </div>
    );
};
