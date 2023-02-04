import React from "react";

function MemeDetail({ name, url}) {
    return (
        <React.Fragment>
            <div>
                Name: {name}
            </div>
            <div>
                Url:<a href={url} target="_blank" rel="noreferrer" style={{backgroundColor:'transparent', color:'blue'}}>{url}</a>
            </div>
        </React.Fragment>
    )
}

export default MemeDetail