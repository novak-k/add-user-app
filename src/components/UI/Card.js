import React from 'react';
import style from './Card.module.css';

const Card = props => {
    return (
        <div className={`${style.card} ${props.styleName}`}>{props.children}</div>
        // <div className={style.card}>{props.children}</div>
    );
};

export default Card;