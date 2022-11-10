import React from "react";

const Coin = (props) => {
    return (
        <>
        <div className="Coin">
            <img src={props.imgSrc} alt={props.side} style={{width: "250px"}}></img>
        </div>
        </>
    )
}

export { Coin };