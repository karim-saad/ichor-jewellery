import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/app';

const theme = extendTheme({
    colors: {
        brand: {
            // solid yellow
            100: '#ffb600',
            // off white
            200: '#f1eadd'
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
