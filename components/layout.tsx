import { FC } from 'react';

import { Meta } from './meta';

export const Layout: FC = ({ children }) => {
    return (
        <>
            <Meta />
            <div className='min-h-screen text-gray-800'>
                <main>{children}</main>
            </div>
        </>
    );
};
