import React, {useState} from 'react'
import { MyButton } from './buttonStyle'


const Button = ({target, text}) => {


  return (
    <>
       <MyButton href={target}>{text}</MyButton>
    </>
  )
}

export default Button