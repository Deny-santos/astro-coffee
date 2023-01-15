import React from 'react'
import Container from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import { holeBlack} from "../../assets"
import Cards from '../../components/Cards/Cards'
import { arrayValues, video, titles } from "./blackHoleValues"
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import Video from '../../components/video/Video'

const Content = <>
  <h1>Buracos Negros</h1>
  <p>são Estruturas Extramemente grandes</p>
  <p>Muito Massivas</p>
  <Button target="#HB" text="Explorar Mais"/>
</>

const BlackHoles = () => {
  return (
    <div className='blackHoles__container'>
      <Header/>
      <Container phone={false} bg="image" src={holeBlack} content={Content}/>
      <Video src={video}/>
      <Cards cardsArray={arrayValues} isAnimation={false} id="HB" titles={titles}/>
      <Footer/>
    </div>
  )
}

export default BlackHoles