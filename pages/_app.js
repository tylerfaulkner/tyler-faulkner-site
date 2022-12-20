import TopBar from "../components/topbar";
import "./main.css";
import "./topbar.css";
import "./contact/index.css";
import "./projects/projects.css"
import "./mobile.css"
import "./prism-vsc-dark-plus.css"
import "./material-symbols.css"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Reenie+Beanie"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
            integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
            crossOrigin="anonymous"
            />
            <TopBar/>
            <Component {... pageProps}/>
        </div> 
    );
}