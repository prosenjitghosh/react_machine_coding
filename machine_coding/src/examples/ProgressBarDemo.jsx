import { useState } from "react"
import { useProgress } from "../hooks/useProgress";

export const ProgressBar  = () =>{
    const {progress, increment, decrement, reset} =  useProgress(10,10);
    return (
        <div>
            <div style={{
                    backgroundColor:"black",
                    border:"1px black", 
                    borderRadius:"15px",
                    height:"27px",
                    width:"600px"
                }}>
                    <div style={{
                        height:"100%",
                        width:""+progress+"%",
                        borderRadius:"15px",
                        backgroundColor:"green",
                        transform:"width 0.09 ease"
                    }}>
                            <p style={{color:"white",textAlign:"center"}}>{progress}%</p>
                    </div>
            </div>

            <div style={{marginTop:"10px"}}>
                <button onClick={()=>increment()}>Increment</button>
                <button style={{marginLeft:"10px"}} onClick={()=>decrement()}>Decrement</button>
                <button style={{marginLeft:"10px"}} onClick={()=>reset()}>Reset</button>
            </div>

            
        </div>
    )
}