import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '../styles/index.css';
import '../styles/code.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider enableSystem attribute='class'>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
