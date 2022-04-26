import { FC } from 'react';

export const Container: FC = ({ children }) => {
    return <div className='container max-w-3xl mx-auto px-5'>{children}</div>;
};
