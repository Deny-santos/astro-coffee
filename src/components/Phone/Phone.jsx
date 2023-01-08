import React from 'react'
import * as C from "./phoneStyle"
import Stories from './Stories'
import { BiRadioCircleMarked } from "react-icons/bi"
import { ImConnection } from "react-icons/im"
import { RiBatteryChargeLine } from "react-icons/ri"
import { SiSimpleanalytics } from "react-icons/si"
import { AiFillCaretLeft } from "react-icons/ai"
import { IoMdSquare } from "react-icons/io"




const Phone = () => {
  return (
    <>
        <C.Mobile>
            <C.screen>
                <C.BarTop>
                    <span>World</span>
                    <BiRadioCircleMarked className='cam'/>
                    <span className='phone__icons'>
                        <SiSimpleanalytics/>
                        <ImConnection/>
                        <RiBatteryChargeLine/>
                    </span>
                </C.BarTop>
                <C.MobContent>
                    <Stories/>
                </C.MobContent>
                <C.BarDown>
                    <IoMdSquare/>
                    <BiRadioCircleMarked/>
                    <AiFillCaretLeft/>
                </C.BarDown>
            </C.screen>
        </C.Mobile>
    </>
  )
}

export default Phone