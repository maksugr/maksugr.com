import { FC } from 'react';

import { CustomLink, CustomLinkProps } from './custom-link';

export const DefaultLink: FC<CustomLinkProps> = (props) => (
    <CustomLink
        textDecoration='none'
        _hover={{ textDecoration: 'none' }}
        {...props}
    />
);
