import { AppProps } from "next/app";
import styles from '.'

function folio({ Component, pageProps }: AppProps) {
    return <><Component {...pageProps} /></>
}
export default folio