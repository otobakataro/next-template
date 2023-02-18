import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";

const theme = extendTheme({
    components: {
        Container: {
            baseSyle: {
                color: 'white',//gray.50
                
            }
        }
    }
})

const Header = (): JSX.Element => {
    return (
        <ChakraProvider theme={theme}>
            <Box w='100%' h='50px' borderBottom='1px' borderColor='gray.200' bg='White'></Box>
        </ChakraProvider>
    )
}

export default Header