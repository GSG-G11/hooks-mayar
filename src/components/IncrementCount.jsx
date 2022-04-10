import { useEffect, useState } from "react";

function IncrementCount(){
    const [count , setCount ] = useState(0);
    const Increment = ()=>{
        setCount(prevCount=> prevCount +1)
    }
    useEffect(()=>{
        window.addEventListener('mousedown',Increment)
        return()=>{
        window.removeEventListener('mousedown',Increment)
        }
    },[count])
    return(
        <span>counter : {count}</span>
    )

}
export default IncrementCount;