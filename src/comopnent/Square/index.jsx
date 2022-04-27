import React from 'react';

const Square = (props) => {
    return (
        <button className="square" onClick={props.handleClick}>
        {props.value}
        </button>
    );
}

export default Square;