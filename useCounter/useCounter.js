import { useState } from "react";

export const useCounter = (initialState = 10) => {
    const [contador, setState] = useState(initialState);
    //const {state, setState} = useState(initialState);

    const increment = (factor = 1) => {
        //console.log(factor);
        setState(contador + 1);
    }

    const decrement = (factor = 1) => {
        setState(contador - 1);
    }

    const resetCounter = () => {
        setState(initialState);
    }

    return {
        contador,
        increment,
        decrement,
        resetCounter
    };

}

//export default useCounter;
