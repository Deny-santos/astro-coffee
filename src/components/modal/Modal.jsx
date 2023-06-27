import React from 'react'
import "./modal.scss"

const Modal = ({title, description, onclose}) => {
    return (
        <>
            <div className={`faded`} onClick={onclose}></div>
            <div className={"myModal visible"}>
                <div className="modal__title">
                    <h3>{title}</h3>
                    <button onClick={onclose}>Fechar</button>
                </div>
                <hr />
                <div>{description}</div>
            </div>
        </>
    )
}

export default Modal