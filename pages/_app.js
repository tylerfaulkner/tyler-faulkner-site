import TopBar from "./topbar";
import "./main.css";
import "./topbar.css";
import "./contact/index.css";
import "./projects/projects.css"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Reenie+Beanie"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono"/>
            <TopBar/>
            <Component {... pageProps}/>
        </div> 
    );
}