import {
    Link as ChakraLink,
    LinkProps as ChakraLinkProps
} from '@chakra-ui/layout';
import Link, { LinkProps } from 'next/link';
import { FC } from 'react';

export type CustomLinkProps = LinkProps & ChakraLinkProps;

export const CustomLink: FC<CustomLinkProps> = ({
    href,
    children,
    ...rest
}) => {
    const hrefInternal = href.startsWith('/') || href.startsWith('#');
    if (hrefInternal) {
        return (
            <Link href={href} passHref>
                <ChakraLink {...rest}>{children}</ChakraLink>
            </Link>
        );
    }
    return (
        <ChakraLink isExternal href={href} {...rest}>
            {children}
        </ChakraLink>
    );
};
