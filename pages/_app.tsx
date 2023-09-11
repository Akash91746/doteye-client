import React from "react";
import { AppProps } from "next/app";
import '../src/index.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <React.StrictMode>
        <Component {...pageProps} />
    </React.StrictMode>
}

export default MyApp;