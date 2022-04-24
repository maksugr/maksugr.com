import { FC } from 'react';

export const Title: FC = ({ children }) => {
    return (
        <h1 className='text-4xl md:text-6xl font-bold text-amber-300 uppercase'>
            {children}
        </h1>
    );
};
