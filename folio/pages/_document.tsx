import Document, {Head, Html, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document";

import Favicon from "../components/favicon";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<Record<string, unknown> & {html: string}> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <Favicon/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;