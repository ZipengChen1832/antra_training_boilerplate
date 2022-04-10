import React, { useEffect, useState } from 'react'

export default function Content({search}) {

    const [artists,setArtists] = useState([]);
    const [count,setCount] = useState();
    const [isSearched,setIsSearched] = useState(false);

    useEffect(()=>{
        let isCancelled = false;
        // const ARTIST_NAME = search;
        const ARTIST_NAME = "ladygaga";
        fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200`)
        .then(res=>res.json())
        .then(data=>{
            if (!isCancelled) {
                setArtists(data.results);
            }
        }).catch(error=>{
            alert("Artist not found!");
        })
        return () => {
            isCancelled = true;
        };
    },[])

    // useEffect(()=>{
    //     setCount(artists.length)
    // },[artists])

    return <div className="album__content">
            <div className="album__content__search-result">
                {isSearched ? <span>{count} results for somebody</span> : 
                <span>Search Albums by ArtistName:</span>}
            </div>
            <div className="album__content__artworks">
                {
                    artists.map((artwork,index)=>{
                        return <div className="artwork" key={"a"+index}>
                            <div className="artwork__thumbnail-container">
                                <img className="artwork__thumbnail" src={artwork.artworkUrl100} alt={"haha"}/>
                            </div>
                            <div className="artwork__title">
                                {artwork.collectionName}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    
  
}
