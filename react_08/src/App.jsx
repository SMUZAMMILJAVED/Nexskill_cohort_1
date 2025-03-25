import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './components/NotFound'
import User from './pages/User'

function App() {

  return (
    <div>
      <div>Navbar</div>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/user/:id' element={<User/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
   <div>Footer</div>
    </div>
   
  )
}

export default App
