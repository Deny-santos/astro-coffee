import React from 'react'
import Container from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import { planets } from "../../assets"
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import Cards from '../../components/Cards/Cards'
import { arrayValues, video, titles} from "./planetValues"
import Video from '../../components/video/Video'

const content = <>
  <h1>Planetas</h1>
  <p>Podem Orbitar Estrelas</p>
  <p>Ou Serem Planetas Errantes</p>
  <Button target="#planets" text="Explorar Mais" />
</>

const Planetas = () => {
  return (
    <div>
      <Header/>
      <Container bg="image" src={planets} content={content}/>
      <Video src={video}/>
      <Cards cardsArray={arrayValues} isAnimation={false} id="planets" titles={titles}/>
      <Footer/>
    </div>
  )
}

export default Planetas