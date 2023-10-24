import React from "react";

function Youtube(props){
    return(
        <>
           
            <div className="youtubebox">
            <div className="box">
                <img src={props.imgsrc}></img>
                <h3>Title:{props.title}</h3>
                <a href={props.link}>link</a>

            </div>
            </div>
        </>
    )
}
export default Youtube