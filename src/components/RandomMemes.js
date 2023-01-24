
import React, { useState, useEffect } from 'react';

const RandomMemes = () => {
    const [memes, setMemes] = useState([]);
    console.log(memes)
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMemes(data.data.memes);
            });
    }, []);
const sortMemes = memes.sort((a, b)=> b.height - a.height)
   return (
    <div className="container">
        <div className="row">
            {sortMemes.map(meme => (
                <div className="col-4" key={meme.id}>
                    <img src={meme.url} alt={meme.name} className="img-fluid" />
                    <span><p>{meme.name}</p></span>
                </div>
            ))}
        </div>
    </div>
)
}

export default RandomMemes;