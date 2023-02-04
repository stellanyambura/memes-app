import React, { useState, useEffect } from 'react';
import MemeList from './MemeList';
import RandomMeme from './RandomMeme';

const RandomMemes = () => {
  const [memes, setMemes] = useState([]);
  const [display, setDisplay] = useState('All')
  const [currentMeme, setCurrentMeme] = useState(null)
  const sortMemes = memes.sort(function(a, b){return 0.5 - Math.random()})

  console.log(memes)

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => {
        console.log(data.data.memes)
        setMemes(data.data.memes);
      });
  }, []);
  
  function handleNextMeme() {
    setCurrentMeme(memes[Math.floor(Math.random() * memes.length)])
  }

  return (
    <React.Fragment>
        <h1 style={{textAlign: "center", paddingBottom: "15px"}}>Memes!</h1>
          <div className="container">
            <div className="row">
                <div style={{paddingBottom: "15px"}}>
                    <button onClick={() => setDisplay('All')}> Grid-view</button>
                </div>
                <div>
                    <button onClick={() => { setDisplay('One'); handleNextMeme()}}> Random</button>
                </div>
                {
                display === 'All' ? <MemeList randomMemes={sortMemes}/> :
                <div> 
                    <RandomMeme currentMeme={currentMeme} onNextMeme={handleNextMeme}/>
                </div>
                }
            </div>
          </div>
    </React.Fragment>
  )
}

export default RandomMemes;