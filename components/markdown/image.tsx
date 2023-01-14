import { FC } from 'react';

export interface IImageProps {
    readonly src: string;
    readonly alt: string;
}

export const Image: FC<IImageProps> = ({ src, alt }) => {
    return (
        <a
            href={src}
            target='_blank'
            className='block my-6 hover:opacity-70 no-underline border-none transition-opacity'
            rel='noreferrer'
        >
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt={alt || ''}
                className='w-auto h-auto max-w-full'
            />
        </a>
    );
};
