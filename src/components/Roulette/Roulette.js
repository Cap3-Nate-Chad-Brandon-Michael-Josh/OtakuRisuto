import React from "react";
//  import './DiceApp.css'

function Roulette(props) {
  function shuffle(list) {
    let randomNumber = Math.floor(Math.random() * (props.list.length - 1)) + 1;

    props.updateExpandedItem(randomNumber);
  }

  return (
    <div className="main">
      <button
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
