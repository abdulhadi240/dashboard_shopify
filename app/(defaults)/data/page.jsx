'use client'
import React from 'react'
import axios from 'axios';
const page = async () => {
    const data = await axios.get("https://dashboard-shopify-backend2.onrender.com/orders")
    console.log(data);
    
  return (
    <div>page</div>
  )
}

export default page