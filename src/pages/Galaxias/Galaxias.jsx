import React from 'react'
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header'
import {arrayValues, video, titles, galaxy} from "./galaxiasValues"
import Video from '../../components/video/Video';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';

const content = <>
  <h1>Galaxias</h1>
  <p>Podem ser espirais como a Via Láctea</p>
  <p> Elípticas, ou possuir forma irregular</p>
  <Button target="#galaxys" text="Explorar Mais"/>
</>

const Psdaa = () => {
  return (
    <div>
      <Header/>
      <Container phone={false} bg="image" src={galaxy} content={content}/>
      <Video src={video}/>
      <Cards cardsArray={arrayValues} isAnimation={false} id="galaxys" titles={titles}/>
      <Footer/>
    </div>
  )
}

export default Psdaa