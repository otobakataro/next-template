import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../assets/style/theme';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <> 
            <ChakraProvider theme={ theme }>
                <Component { ...pageProps } />
            </ChakraProvider>
        </>
    )
}