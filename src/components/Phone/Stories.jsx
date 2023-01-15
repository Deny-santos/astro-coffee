import React, {useState} from 'react'
import "./stories.scss"
import { imgs,text } from "./storiesValues"
import { BsArrowLeft, BsArrowRight} from "react-icons/bs"


const Stories = () => {
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
        <div className="news">
            <h4>{text[cc].title}</h4>
            <p>{text[cc].description1}</p>
            <p>{text[cc].description2}</p>
        </div>
    </div>
  )
}

export default Stories