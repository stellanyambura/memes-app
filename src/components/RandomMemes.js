
import React, { useState, useEffect } from 'react';

const RandomMemes = () => {
    const [memes, setMemes] = useState([]);
    const [display, setDisplay] = useState('all')
    const [currentMeme, setCurrentMeme] = useState(null)
    console.log(memes)
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMemes(data.data.memes);
            });
    }, []);
    function handleNextMeme(){
        setCurrentMeme(memes[Math.floor(Math.random() * memes.length)])
    }
    function data(details){
        console.log(details)
    }
const sortMemes = memes.sort((a, b)=> b.height - a.height)
   return (
    <div className="container">
        <div className="row">
            <button onClick={()=>setDisplay('all')}>All Memes</button>
            <button onClick={()=> {setDisplay('one'); setCurrentMeme(memes[Math.floor(Math.random() * memes.length)])}}>view randomly</button>
            {
            display === 'all'?
            sortMemes.map(meme => (
                <div className="col-4" key={meme.id} onClick={()=>data(meme)}>
                    <img src={meme.url} alt={meme.name} className="img-fluid" />
                    <span><p>{meme.name}</p></span>
                </div>
            ))
        : <div className="col-4 random">
        {currentMeme && 
            <>
            <img src={currentMeme.url} alt={currentMeme.name} className="img-fluid" onClick={()=>data(currentMeme)}/>
            <span><p>{currentMeme.name}</p></span>
            <button onClick={handleNextMeme}>Next Meme</button>
            </>
        }
    </div>
        }
        </div>
    </div>
)
}

export default RandomMemes;