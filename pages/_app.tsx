import { AppProps } from 'next/app';
import '../styles/index.css';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/theme';
import '@fontsource/raleway/400.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/700.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
