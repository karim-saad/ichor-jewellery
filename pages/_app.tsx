import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/app';

const theme = extendTheme({
    colors: {
        brand: {
            100: '#814851'
        }
    }
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
