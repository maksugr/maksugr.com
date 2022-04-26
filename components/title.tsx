import { FC } from 'react';

export const Title: FC = ({ children }) => {
    return (
        <h1 className='text-4xl md:text-6xl text-amber-300 lowercase'>
            {children}
        </h1>
    );
};
