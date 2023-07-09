// _app.js is a top-level reacto component that wraps all the pages in your application. 
// Use this component to keep state when navigating between pages, or to add globals styles.

// Import Global.css
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    );
};