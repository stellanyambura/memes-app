
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

    return (
        <div>
            {memes.map(meme => (
                <img key={meme.id} src={meme.url} alt={meme.name} />
            ))}
        </div>
    )
}

export default RandomMemes;