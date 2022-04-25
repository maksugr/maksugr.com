/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Code,
    Divider,
    Heading,
    HeadingProps,
    ListItem,
    OrderedList,
    Table,
    TableCaption,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
    UnorderedList,
    useColorModeValue,
    chakra
} from '@chakra-ui/react';
import { HTMLChakraProps } from '@chakra-ui/system';
import { FC, ReactNode } from 'react';

import { StylishLink } from './stylish-link';
import { Small } from './typography';
import { SideNote } from './side-note';
import { Asterisk } from './asterisk';

const Hr: FC = () => {
    const borderColor = useColorModeValue('gray.200', 'gray.600');
    return <Divider borderColor={borderColor} my={4} w='100%' />;
};

const InlineCode: FC<any> = (props) => {
    const colorScheme = useColorModeValue('gray', 'pink');
    return <Code colorScheme={colorScheme} {...props} />;
};

const Blockquote: FC<HTMLChakraProps<'blockquote'>> = (props) => (
    <chakra.blockquote
        p={6}
        mx={2}
        position='relative'
        _before={{
            content: "'“'",
            position: 'absolute',
            left: 1,
            top: 3,
            fontSize: '4xl'
        }}
        _after={{
            content: "'”'",
            position: 'absolute',
            right: 1,
            bottom: 3,
            fontSize: '4xl'
        }}
        {...props}
    />
);

const H: FC<HeadingProps> = (props) => (
    <Heading
        sx={{
            '&': {
                scrollMarginTop: '5.5rem'
            },
            '&:hover > a': {
                visibility: 'visible'
            },
            '& a': {
                position: 'absolute',
                marginLeft: '-1em',
                paddingRight: '0.5em',
                cursor: 'pointer',
                visibility: 'hidden',
                width: '80%',
                maxWidth: '800px',
                color: 'gray.700'
            },
            '& a:hover': {
                visibility: 'visible',
                textDecoration: 'none'
            },
            '& a span:after': {
                content: '"#"'
            }
        }}
        {...props}
    />
);

export const MDXComponents = {
    h1: (props: HeadingProps): ReactNode => <H as='h1' size='xl' {...props} />,
    h2: (props: HeadingProps): ReactNode => <H as='h2' size='lg' {...props} />,
    h3: (props: HeadingProps): ReactNode => <H as='h3' size='md' {...props} />,
    h4: (props: HeadingProps): ReactNode => <H as='h4' size='sm' {...props} />,
    p: (props: any): ReactNode => <Text as='p' {...props} />,
    a: (props: any): ReactNode => <StylishLink {...props} />,
    ul: (props: any): ReactNode => <UnorderedList pl={4} {...props} />,
    ol: (props: any): ReactNode => <OrderedList pl={4} {...props} />,
    li: (props: any): ReactNode => <ListItem {...props} />,
    table: (props: any): ReactNode => <Table {...props} />,
    thead: (props: any): ReactNode => <Thead {...props} />,
    tbody: (props: any): ReactNode => <Tbody {...props} />,
    tfoot: (props: any): ReactNode => <Tfoot {...props} />,
    tr: (props: any): ReactNode => <Tr {...props} />,
    th: (props: any): ReactNode => {
        return (
            <Th isNumeric={props.align && props.align == 'right'} {...props} />
        );
    },
    td: (props: any): ReactNode => {
        return (
            <Td isNumeric={props.align && props.align == 'right'} {...props} />
        );
    },
    caption: (props: any): ReactNode => <TableCaption {...props} />,
    hr: Hr,
    inlineCode: (props: any): ReactNode => <InlineCode {...props} />,
    blockquote: Blockquote,
    // eslint-disable-next-line @next/next/no-img-element
    img: (props: any): ReactNode => <img alt={props.alt} {...props} />,
    Small,
    SideNote,
    Asterisk
};
