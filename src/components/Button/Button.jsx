import React, {useState} from 'react'
import { MyButton } from './buttonStyle'


const Button = ({target, text}) => {

  const [activeModal, setActiveModal] = useState(false)

  const handleCancel = (e) => {
    e.preventDefault()
    setActiveModal(true)
  }

  return (
    <>
       <MyButton href={target ? target : handleCancel}>{text}</MyButton>
       <div className='modal'></div>
    </>
  )
}

export default Button