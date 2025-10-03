import { useState } from "react"

export const useCounter = (initialValue = 0 , change = 1) =>{
    const [value, setValue] = useState(initialValue);

    const increment = (step  = change)=>  setValue((prev)=>prev+step );
    const decrement = (step  = change)=> setValue((prev)=>prev-step );
    const reset = (newInitial = initialValue) => setValue(newInitial);

    return {value, increment, decrement, reset};
}