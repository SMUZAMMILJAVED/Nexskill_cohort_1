import './App.css'
import { useState } from 'react';
import AddItem from './components/addItem/AddItem';
import List from './components/List'
function App() {
  let bool = true;
  const[value, setValue]=useState( ["item1", "item2", "item3", "item4", "item5"])
  const addHandler = (data) => {
 
    setValue([...value,data])

  }
  return (
    <div
      className={`my-class ${bool && "App"}`}
      style={{
        backgroundColor: bool ? "yellow" : ""
      }}
    >
      <AddItem onAdd={addHandler} />
      <List arr={value} />
      </div>
  )
}

export default App
