import React, { useState } from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search";
import Content from "./components/Content";
import "./style/index.css";

export default function App() {
    
    const [search,setSearch] = useState("");
    function updateSearch(newSearch){
        setSearch(newSearch)
    }

    return(
        <section className="album">
            <Search updateSearch={updateSearch}/>
            <Content search={search}/>
        </section>
    )
    
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);

