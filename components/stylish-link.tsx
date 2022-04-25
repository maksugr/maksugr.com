import { FC } from 'react';
import { useColorModeValue } from '@chakra-ui/react';

import { CustomLink, CustomLinkProps } from './custom-link';
import { DefaultLink } from './default-link';

export const StylishLink: FC<CustomLinkProps> = (props) => {
    const color = useColorModeValue('teal.300', 'teal.500');

    if (props['aria-hidden'] === 'true') {
        return <DefaultLink {...props} />;
    } else {
        return (
            <CustomLink
                bgGradient={`linear(to-b, ${color} 0%, ${color} 100%)`}
                backgroundPosition='0 100%'
                textDecoration='none'
                backgroundRepeat='repeat-x'
                backgroundSize='2px 2px'
                transition='background-size .2s'
                _hover={{
                    textDecoration: 'none',
                    backgroundSize: '4px 50px'
                }}
                {...props}
            />
        );
    }
};
