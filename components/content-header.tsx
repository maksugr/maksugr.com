import { FC } from 'react';

interface IContentHeaderProps {
    readonly title: string;
    readonly summary: string;
}

export const ContentHeader: FC<IContentHeaderProps> = ({ title, summary }) => {
    return (
        <section className='mb-12'>
            <h1 className='text-5xl sm:text-6xl md:text-8xl'>{title}</h1>
            <span className='block mt-4 italic text-gray-500 text-justify'>
                {summary}
            </span>
        </section>
    );
};
