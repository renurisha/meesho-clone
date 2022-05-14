import React from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Try = () => {
  const[product,setProduct]=useState([]);

 const {id}=useParams();
 useEffect(()=>{
   axios.get(`http://localhost:3001/products/${id}`).then((response)=>{
     console.log(response.data)
     setProduct(...[response.data])
   })
 },[])


// const Try = () => {
  return (
    <div>
      details
    </div>
  )
}

export default Try
