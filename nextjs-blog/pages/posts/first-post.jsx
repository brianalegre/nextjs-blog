// Head - used for updating meta data
import Head from 'next/head';

// Link - used for linking pages similar to <a>
import Link from 'next/link';

// Script - used for when using CDNs/SDKs
import Script from 'next/script';

// Import Layout Component from components/layout.jsx
import Layout from '../../components/layout';

// Export the main function of the page
export default function FirstPost() {
    return (
        // Add Layout Component
        <Layout>
            {/* Metadata */}
            <Head>
                <title>First Post</title>
            </Head>
            {/* Script */}
            {/* <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                /> */}
            <h1>First Post</h1>
            <h2>
                {/* Link to the Home Page - pages/index.jsx */}
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}