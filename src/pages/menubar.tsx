import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";

const MenuBar = (): JSX.Element => {
    return (
        <ChakraProvider>
            <Box w='100%' h='50px' borderBottom='1px' borderColor='gray.200' bg='White'></Box>
        </ChakraProvider>
    )
}

export default MenuBar