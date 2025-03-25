import React, { useContext } from 'react'
import { CounterContext } from '../context/Counter'

const Counter = () => {
   const update= useContext(CounterContext);
   console.log(update);
   
  return (
    <div>
        <button onClick={()=>update.setCount(update.count+1)}>increment +</button>
        <button onClick={()=>update.setCount(update.count-1)}>decrement -</button>
    </div>
  )
}

export default Counter