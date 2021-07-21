import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';

import style from './ErrorModal.module.css';

const Backdrop = (props) => {
    return (
        <div className={style.backdrop} onClick={props.onConfirm} />
    )
};

const ModalOverlay = (props) => {
    return (
        <Card styleName={style.modal}>
            <header className={style.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={style.content}>
                <p>{props.massage}</p>
            </div >
            <footer className={style.actions}>
                <Button onMyClick={props.onConfirm}>Okay!</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    massage={props.massage}
                    onConfirm={props.onConfirm} 
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default ErrorModal;