import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import jwt_decode from 'jwt-decode'
import '../../styles/home.css'
import { Publication } from '../ elements/Publication'
export const Home = () => {
    const [publications , setPublications]=useState([])
    const {token} = useContext(AuthContext)
    const getPublications= async ()=>{
        const response = await fetch(`http://127.0.0.1:8000/api/home/${jwt_decode(token.access).user_id}`)
        const data = await response.json()
        setPublications(data)
        console.log(data)
    }
    useEffect(()=>{getPublications()},[])
  return (
    <div className='home'>
        {   publications.map((publication)=>
            {
                return(<Publication Publication={publication}/>)
            })
        }
    </div>
  )
}
