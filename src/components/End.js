import React from 'react';

export default function End(props) {
    return (
        <div className="quiz">
            <div className="quiz__text">GAME OVER</div>
            <div className="quiz__text">Your score is {props.result}!</div>
            <div className="quiz__text">You are {props.name}</div>
        </div>
    )
}