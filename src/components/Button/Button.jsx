import React, {useState} from 'react'
import { MyButton } from './buttonStyle'


const Button = ({target, text}) => {

  const [activeModal, setActiveModal] = useState(false)


  return (
    <>
       <MyButton href={target}>{text}</MyButton>
    </>
  )
}

export default Button