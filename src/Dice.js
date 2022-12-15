import React, { useState } from 'react';
import './Die.css';
import './Dice.css'
import Die from './Die';

const Dice = ({ numDice = 10, title = "Main Game", maxVal = 20 }) => {

    const [numbers, setNumber] = useState(Array.from({ length: numDice} ))

    const rollDice = () =>  (
        setNumber(numbers => (
            numbers.map(n => Math.floor(Math.random() * maxVal) + 1 )
        ))
    )

    return (
        <div className='Dice'>
            <h2>{title}</h2>
            <div>
            {numbers.map(die => <Die val={die} /> )}
            </div>
            <button onClick={rollDice}>Roll</button>
        </div>
    )
}
export default Dice;