import { ReactElement } from "react"
import Head from 'next/head';

const Header = (): ReactElement =>(
        <>
            <Head>
                <title>Philip M. Gollucci</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
        </>
)

export default Header;