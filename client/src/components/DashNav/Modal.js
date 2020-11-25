import { render } from "@testing-library/react"
import React, { Component } from "react"
import './Modal.css'
  
export default class Modal extends Component{
    state ={
        modal: false,
        className: "modal-wrapper",
        classNameHidden: "modal-wrapper2"
      }

      handleModalclick = () => {
        this.setState({ modal: !this.state.modal})
      }

    render(){
        const animeImg = require('../../img/animeCover.png')
        return(
           
        <div>
           
            <div className={(this.state.modal) ? this.state.className : this.state.classNameHidden}

            
            >
                <div className="modal-header">
                    <p className='Title'>Naruto</p>
                    
                </div>
                <div className="modal-content">
                    <div className="modal-body">
                    <img src={animeImg}/>
                   

                    
                    
                     <h3>Genre</h3>
                     <h4>Adventure fiction</h4>
                     <h3>Episode Count</h3>
                     <h4>ep: 234</h4>
                     <h3>Rating</h3>
                    <h4><i className="fas fa-star"></i></h4>

                    <p>Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
                </div>
                <div className="modal-footer">
                </div>
                
            </div>
            
            </div>

            <button className="modalS" onClick={this.handleModalclick}>
            <i className="fas fa-list-alt"></i>
            </button>
        </div>
           
            
        )
    
    }
}