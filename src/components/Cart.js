import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const sepet = useSelector(state=>state);
    console.log(sepet);
  return (
    <div>Cart</div>
  )
}
