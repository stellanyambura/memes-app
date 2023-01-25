import React, { useState } from "react";
import MemeDetail from "./MemeDetail";

function MemeList({ memes }) {
    const [memeDetailDisplay, setMemeDetailDisplay] = useState(-1)

    return (
        memes.map(meme => (
            <div className="col-4" key={meme.id} >
              <img src={meme.url} alt={meme.name} className="img-fluid" style={{height: 580, width: 2118, padding: "15px"}}/>
                    <div style={{paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px"}}>
                        <button style={{padding: "7.5px"}} onClick={() => setMemeDetailDisplay(meme.id)}>Show Meme Details</button>
                    </div>
                    <div>
                        <button style={{padding: "7.5px"}} onClick={() => setMemeDetailDisplay(-1)}>Hide Meme Details</button>
                    </div>
              {memeDetailDisplay !== meme.id ? null : <MemeDetail key={meme.id} name={meme.name} url={meme.url}/>}
            </div>
        ))
    )
}

export default MemeList

