import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState();
  const [data,setData]=useState("muzammil");
  useEffect(()=>{
    console.log("Hello world!");
    
  })
  return (
   <>
   <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setData("updated")}>
          updated count {data}
        </button>
   </>
     
        
        
  )
}

export default App
