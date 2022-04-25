import {
    Box,
    Heading,
    HStack,
    useColorModeValue,
    Icon
} from '@chakra-ui/react';
import { ReactNode, ElementType, FC } from 'react';
import {
    MdLocalFireDepartment,
    MdInfoOutline,
    MdOutlineCheckCircleOutline,
    MdWarningAmber
} from 'react-icons/md';
import { IconType } from 'react-icons';

interface IBaseSideNoteProps {
    readonly title: string;
    readonly bg: string;
    readonly borderColor: string;
    readonly icon: ReactNode;
}

const BaseSideNote: FC<IBaseSideNoteProps> = ({
    title,
    bg,
    borderColor,
    children,
    icon
}) => {
    return (
        <Box
            as='aside'
            bg={bg}
            w='100%'
            p={4}
            mt={4}
            mb={4}
            borderRadius='md'
            borderLeftWidth={6}
            borderLeftColor={borderColor}
            borderLeftStyle='solid'
        >
            <HStack>
                {icon}
                <Heading mt={0} fontSize='md'>
                    {title}
                </Heading>
            </HStack>

            {children}
        </Box>
    );
};

type SideNoteType = 'info' | 'success' | 'warning' | 'danger';

interface ISideNoteVariant {
    readonly Icon: ElementType<IconType>;
    readonly dark: Pick<IBaseSideNoteProps, 'bg' | 'borderColor'>;
    readonly light: Pick<IBaseSideNoteProps, 'bg' | 'borderColor'>;
}

const sideNoteVariants: { [V in SideNoteType]: ISideNoteVariant } = {
    success: {
        Icon: MdOutlineCheckCircleOutline,
        dark: {
            bg: 'green.700',
            borderColor: 'green.300'
        },
        light: {
            bg: 'green.200',
            borderColor: 'green.700'
        }
    },
    warning: {
        Icon: MdWarningAmber,
        dark: {
            bg: 'yellow.700',
            borderColor: 'yellow.300'
        },
        light: {
            bg: 'yellow.200',
            borderColor: 'yellow.700'
        }
    },
    info: {
        Icon: MdInfoOutline,
        dark: {
            bg: 'blue.600',
            borderColor: 'blue.100'
        },
        light: {
            bg: 'blue.100',
            borderColor: 'blue.600'
        }
    },
    danger: {
        Icon: MdLocalFireDepartment,
        dark: {
            bg: 'red.700',
            borderColor: 'red.200'
        },
        light: {
            bg: 'red.200',
            borderColor: 'red.700'
        }
    }
};

interface ISideNoteProps {
    readonly title: string;
    readonly type: SideNoteType;
}

export const SideNote: FC<ISideNoteProps> = ({ title, type, children }) => {
    const variant = sideNoteVariants[type];
    const bg = useColorModeValue(variant.light.bg, variant.dark.bg);
    const borderColor = useColorModeValue(
        variant.light.borderColor,
        variant.dark.borderColor
    );
    return (
        <BaseSideNote
            title={title}
            bg={bg}
            borderColor={borderColor}
            icon={<Icon as={variant.Icon} color={borderColor} />}
        >
            {children}
        </BaseSideNote>
    );
};
