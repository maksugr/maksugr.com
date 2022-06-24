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
        <div className='flex items-center group'>
            <h3 className='text-lg mr-2'>
                <Link as={`/${type}/${slug}`} href={`/${type}/[slug]`}>
                    {title}
                </Link>
            </h3>
            <p className='text-xs text-gray-500 font-light hidden md:group-hover:block'>
                [{publishedAt} • {readingTime}]
            </p>
        </div>
    );
};
