import { Text, TextProps } from '@chakra-ui/react';
import { FC } from 'react';

export const Small: FC<TextProps> = ({ children, ...props }) => (
    <Text as='p' fontSize='xs' {...props}>
        {children}
    </Text>
);
