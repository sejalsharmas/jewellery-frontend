import React from 'react'
import './Cards.css'
import { Link } from'react-router-dom';

function Cards({id , name, type, Metalused ,Weight, Color, Price, Status , image}) {
  return (
    <Link to ={`/detail/${id}`}>
    <div className='Card'>
        <div>
        <img src={image} className='jewel-img'></img>
        </div>
        <div className='info'>
       <h1 className='price'>Price:{Price}</h1>
       <h2 className='type'>Type:{type}</h2>
       <p className='metalused'>Quality:{Metalused}</p>
       </div>
       
    </div>
    </Link>
    
  )
}

export default Cards