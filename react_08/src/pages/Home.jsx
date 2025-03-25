import React, { useEffect, useState } from 'react'
import HomeContent from '../components/HomeContent'
import { Link } from 'react-router-dom'

const Home = () => {
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json =>setData(json))
    },[data])
    
  return (
    <>
     <div>Home</div>
     <HomeContent/>
     <Link to="/about">go to about</Link> <br />
     title : {data.completed?.toString()}
    </>
   
  )
}

export default Home