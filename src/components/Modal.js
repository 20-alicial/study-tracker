import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children, handleClose, isSalesModal }) {
    return ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className="modal" style={{
                border: "4px solid", 
                borderColor: 'grey',
                textAlign: "center"
            }}>
                {children}
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    ), document.body)
}