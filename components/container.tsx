import { FC } from 'react';

export const Container: FC = ({ children }) => {
    return (
        <div className='container text-black font-source-sans-pro max-w-3xl mx-auto px-5'>
            {children}
        </div>
    );
};
