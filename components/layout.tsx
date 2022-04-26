import { FC } from 'react';

import { IMetaProps, Meta } from './meta';

interface ILayoutProps {
    readonly meta?: IMetaProps;
}

export const Layout: FC<ILayoutProps> = ({ meta, children }) => {
    return (
        <>
            <Meta {...meta} />
            <div className='min-h-screen text-gray-800'>
                <main>{children}</main>
            </div>
        </>
    );
};
