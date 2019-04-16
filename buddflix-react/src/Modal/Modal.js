import ReactDOM from 'react-dom';
import React from 'react';
import './modal.css';


const Modal = ({ children }) => (
    ReactDOM.createPortal(
        <div className="modal">
            {children}
        </div>,
        document.getElementById('modal-root')

    )
);


export default Modal;