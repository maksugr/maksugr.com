import { FC } from 'react';

interface IContentHeaderProps {
    readonly title: string;
    readonly summary: string;
}

export const ContentHeader: FC<IContentHeaderProps> = ({ title, summary }) => {
    return (
        <section className='mb-12'>
            <h1 className='text-5xl sm:text-6xl md:text-7xl'>{title}</h1>
            <span className='text-2xl block mt-4 text-gray-500'>{summary}</span>
        </section>
    );
};
