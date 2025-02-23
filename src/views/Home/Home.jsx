import React ,{useEffect, useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import './Home.css'
import Cards from  '../../components/cards/Cards'
import { Link } from 'react-router-dom'


function Home() {

  const [jewelries, setJewelries] = useState([])

  const loadJewelrie = async() =>{
     console.log('Loading Jewlries...')
     const response = await axios.get(`${import.meta.env.VITE_API_URL}/jewelries`)

     setJewelries(response.data.data)
    
  }

  useEffect(()=>{
    loadJewelrie()
  },[])
  return (
    <div className='background-color'>
      
      <Navbar/>
     
      <div >
        <Link to = {'/add'}>
         <button className='btn'>ADD NEW JEWELLERY</button>
         </Link>
        </div>
      <div className='card-container'>
      {
        jewelries.map((jewelerie, i) => {
          const {id , name, type, Metalused ,Weight, Color, Price, Status , image} = jewelerie
          return( 
          <Cards
          id={id}
          name={name}
          type={type}
          Metalused={Metalused}
          Weight={Weight}
          Color={Color}
          Price={Price}
          Status={Status}
          image={image}
          />
          )
        })
      }
      </div>
    </div>

   
     


   
  )
}


export default Home
