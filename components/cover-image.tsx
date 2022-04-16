import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

interface ICoverImageProps {
    readonly title: string;
    readonly src: string;
    readonly slug?: string;
}

export const CoverImage: FC<ICoverImageProps> = ({ title, src, slug }) => {
    const image = (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={`Cover Image for ${title}`}
            className={cn('shadow-sm', {
                'hover:shadow-lg transition-shadow duration-200': slug
            })}
        />
    );
    return (
        <div className='sm:mx-0'>
            {slug ? (
                <Link as={`/posts/${slug}`} href='/posts/[slug]'>
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    );
};
