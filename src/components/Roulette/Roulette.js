import React from "react";
import './Roulette.css'
//  import './DiceApp.css'

function Roulette(props) {
  function shuffle(list) {
    let randomNumber = Math.floor(Math.random() * (props.list.length));

    props.updateExpandedItem(randomNumber);
  }

  return (
    <div className="main">
      <button
        className='shuffle'
        id="btn"
        onClick={() => {
          shuffle();
          props.handleShuffle();
        }}
      >
        Shuffle
      </button>
    </div>
  );
} 

export default Roulette;
