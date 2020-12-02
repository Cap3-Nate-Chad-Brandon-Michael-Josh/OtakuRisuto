import React from 'react';
//  import './DiceApp.css'


function Roulette() {
    function shuffle() {
        const img = document.getElementById("img");
        console.log(img)
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        // console.log(randomNumber)
        img.setAttribute('src', `${randomNumber}.png`)
    }

    // function anim() {
    //     setTimeout(shuffle,500);
    //     const img = document.getElementById('img');
    //     img.setAttribute("src", require("./diceroll.gif"))
    // }
  return (
    <div className="main">
        <img src={require("./1.png")} alt="" id="img" />
        
        <button id="btn" onClick={shuffle}>Shuffle</button>
    </div>
  );
}

export default Roulette;