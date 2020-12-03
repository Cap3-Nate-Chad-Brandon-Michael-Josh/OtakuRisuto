import React from 'react';
//  import './DiceApp.css'


function Roulette(props) {
    function shuffle(list) {
        // const img = document.getElementById("img");
        // console.log(img)
        let randomNumber = Math.floor(Math.random() * (props.list.length-1)) + 1;
        console.log(randomNumber)
        // img.setAttribute('src', `${randomNumber}.png`)
        props.updateExpandedItem(randomNumber)
    }

    // function anim() {
    //     setTimeout(shuffle,500);
    //     const img = document.getElementById('img');
    //     img.setAttribute("src", require("./diceroll.gif"))
    // }
  return (
    <div className="main">
        {/* <img src={require("./1.png")} alt="" id="img" /> */}
        
        <button id="btn" onClick={()=>{
          shuffle()
          props.handleShuffle()
          }}>Shuffle</button>
    </div>
  );
}

export default Roulette;