import './App.css'
import List from './components/List'
function App() {
  let bool = true;
  return (
    <div 
    className={`my-class ${bool&&"App"}`}
    style={{
      backgroundColor:bool?"yellow":""
    }}
    > <List/></div>
  )
}

export default App
