import React,  { useState } from 'react';
// import  Modal  from './Modal'

function ModalOpen() {
const [show,setShow]=useState(false);

const closeModalHandler = () => setShow(false);
return (
    <div>
        <button 
        onclick={() => setShow(true)} 
        className="btn-openModal">
            Open Modal
        </button>
        {/* <Modal show={show} closeModalHandler={closeModalHandler} /> */}
    </div>
)
}

// export default ModalOpen;