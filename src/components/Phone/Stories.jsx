import React, {useState} from 'react'
import "./stories.scss"
import { imgs } from "./storiesValues"
import { BsArrowLeft, BsArrowRight} from "react-icons/bs"


const Stories = () => {
    const [isimgActive, setIsimgActive] = useState(false)
    const [activeImg, setActiveImg] = useState(0)
    let cc = activeImg
    const handlePreviu= () => { 
            if(cc <= imgs.length -2 ) {
                setActiveImg(activeImg +1)
                console.log(cc)
            } else {
                cc = setActiveImg(0)
                console.log(cc)
            }
    } 

    const handlePass = () => {
            if(cc !== 0) {
                cc = setActiveImg(activeImg -1)
                console.log(cc)
            }
            else {
                setActiveImg(imgs.length-1)
                console.log(cc)
            }
    }
    console.log(cc + "-------")
  return (
    <div className='storie__container'>
        <div className='storie__btn-content'>
            <div onClick={handlePass} ><BsArrowLeft/></div>
            <div onClick={handlePreviu} ><BsArrowRight/></div>
        </div>
        <div className='storie__img'>
            <img src={imgs[cc]} alt="" />
        </div>
    </div>
  )
}

export default Stories