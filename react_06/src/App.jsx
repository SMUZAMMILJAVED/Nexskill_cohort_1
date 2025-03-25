import { useContext } from 'react'
import './App.css'
import Counter from './components/Counter'
import { CounterContext } from './context/Counter'

function App() {
const countNumber =useContext(CounterContext);
console.log(countNumber);
  return (
   <div>
    <h1>Counter is  {countNumber.count}</h1>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
   </div>
  )
}

export default App
