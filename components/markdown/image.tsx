import { FC } from 'react';

export interface IImageProps {
    readonly src: string;
    readonly alt: string;
}

export const Image: FC<IImageProps> = (props) => {
    return (
        <div className='my-6 image-container'>
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={props.src}
                alt={props.alt || ''}
                className='w-auto h-auto max-w-full'
            />
        </div>
    );
};
