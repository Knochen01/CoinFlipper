import React, { useState } from 'react';
import  { Coin } from "./Coin";
import { random } from './Randomizer';
import { Data } from './Database';



const CoinContainer = (props) => {
    // Coin will be an object later and be used to get the Sides and Images of Coins. 
    // Coin's two possible Values will be either props.coins[0]  OR props.coins[1]
    const [coin, setCoin] = useState(null);
    // Keeps track of Tails
    const [tailCount, setTail] = useState(0);
    // Keep track of Heads
    const [headCount, setCount] = useState(0);

    const numberofHeads = headCount;
    const numberofTails = tailCount;

    const handleClick =  () => {
        // NewCoin will be an object
        const newCoin = random(Data.coins)
        // We are giving our Coin that we initalized earlier a Value. 
        setCoin(newCoin)
        if (newCoin.side === "Heads") {
            setCount(dontknow => dontknow + 1)
        } else {
            setTail(dontknow => dontknow +1)
        }
    }
    
    const currCoin = coin ? (
    <Coin imgSrc={coin.imgSrc} side={coin.side} />
    ) : null


    return (
        <>
        <div className='CoinContainer'>
            <h1>Let's flip a coin!</h1>
            {currCoin}
            <button onClick={handleClick}>Flip ME</button>
            <p> Out of {numberofHeads+numberofTails} flips, there have been {numberofHeads} heads and {numberofTails} tails.</p>
        </div>
        </>
    )
}

export default CoinContainer;




// CoinContainer.defaultProps = {
//     coins: [
//         {
//             side: "Heads",
//             imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/dd/2017-D_Roosevelt_dime_obverse_transparent.png"
//         },
//         {
//             side: "Tails",
//             imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/2017-D_Roosevelt_dime_reverse_transparent.png/1280px-2017-D_Roosevelt_dime_reverse_transparent.png"
//         }
//     ]
// }
