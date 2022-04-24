import { FC } from 'react';

export const Container: FC = ({ children }) => {
    return <div className='container max-w-5xl mx-auto px-5'>{children}</div>;
};
