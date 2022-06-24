import { FC } from 'react';

import { IContentMetadata } from '../interfaces/content-metadata';
import { ContentTypeEnum } from '../enums/content-type';

import { ContentPreview } from './content-preview';

interface IContentProps {
    readonly type: ContentTypeEnum;
    readonly metadatas: IContentMetadata[];
}

export const Content: FC<IContentProps> = ({ type, metadatas }) => {
    return (
        <section>
            <ul>
                {metadatas.map((metadata) => (
                    <li
                        className='relative pl-5 mb-1 flex before:absolute before:top-0 before:left-0 before:w-1.5 before:h-full before:bg-black'
                        key={metadata.title}
                    >
                        <ContentPreview
                            key={metadata.slug}
                            type={type}
                            metadata={metadata}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
