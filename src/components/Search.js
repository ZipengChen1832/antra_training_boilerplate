import React, { useRef } from 'react';


export default function Search({updateSearch}) {

    const searchRef = useRef();

    function handleSubmit(e){
        e.preventDefault();
        // updateSearch(searchRef.current.value);
        console.log("click");
    }
    

    return <header className="album__search-container">
        <div className="album__search-form">
            <input id="album__searchbar" type="text" placeholder="Search..." required ref={searchRef}/>
            <button onClick={()=>{console.log("click")}} className="album__icon-container">
                <img src="./images/search-icon.png" alt="icon"/>
            </button>
        </div>
    </header>
    
}

