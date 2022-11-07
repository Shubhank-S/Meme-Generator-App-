import React from 'react'
import { useEffect } from 'react'
import MemeCard from '../components/Card'
import getAllMemes from '../api/memes'
import { useState } from 'react'

const HomePage=()=>{
    const[data,setData] = useState([])
    useEffect(()=>{
       getAllMemes().then(memes => setData(memes.data.memes))
    },[])
    return(
        <div className='row'>
           {
            data.map(element => <MemeCard img={element.url} title={element.name} />)
           }
        </div>
    )
}

export default HomePage