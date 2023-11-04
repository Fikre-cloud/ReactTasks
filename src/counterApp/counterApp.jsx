//what to do? display counter values on screen
//buttons to increment and decrement and reset
//how? we use useState and functional component

import React, {useState} from 'react';

function CounterApp () {
    const [counter, setCounter] = useState(0);
    let [currentValue, setCurrentValue] = useState(0);


    function increment() {
        setCounter(++currentValue);
    };

    function decrement() {
        setCounter(--currentValue);
    };

    function reset(){
        setCounter(0);
    };

    function setCurrentValueFromInput(e) {
        setCurrentValue(parseInt(e.target.value));
    };

    return(
        <div>
        <p>Counter: {counter}</p>
        <input type="text" name="counter" onChange={(e)=>setCurrentValueFromInput(e)}/>
        <button type="button" onClick={increment}>increment</button>
        <button type="button" onClick={decrement}>decrement</button>
        <button type="button"onClick={reset}>reset</button>
        </div>
    )
}

export default CounterApp