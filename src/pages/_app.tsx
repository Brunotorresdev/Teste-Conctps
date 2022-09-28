import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ListProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <ListProvider>
                <Component {...pageProps} />;
            </ListProvider>
        </ChakraProvider>
    );
}

export default MyApp;
