import { FC } from 'react';

interface IContentHeaderProps {
    readonly title: string;
}

export const ContentHeader: FC<IContentHeaderProps> = ({ title }) => {
    return (
        <section className='mb-12'>
            <h1 className='text-4xl sm:text-6xl md:text-8xl'>{title}</h1>
        </section>
    );
};
