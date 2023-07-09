// Head - used for updating meta data
import Head from 'next/head';

// Link - used for linking pages similar to <a>
import Link from 'next/link';

// Export the main function of the page
export default function FirstPost() {
    return (
        <>
            {/* Metadata */}
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                {/* Link to the Home Page - pages/index.jsx */}
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}