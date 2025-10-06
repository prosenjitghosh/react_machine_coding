import { useState } from "react"

export const useProgress = (initial = 10, step = 10) =>{
    const [progress, setProgress] = useState(initial);

    const increment =  (move = step) => setProgress((p)=>Math.min(p+move,100))
    const decrement =  (move = step) => setProgress((p)=>Math.max(p-move,0))
    const reset = () => setProgress(initial);

    return {progress, increment, decrement, reset};
}