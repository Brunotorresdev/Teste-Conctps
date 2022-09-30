import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ListProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ListProvider>
            <ChakraProvider>
                <Component {...pageProps} />;
            </ChakraProvider>
        </ListProvider>
    );
}

export default MyApp;
