import React from 'react'
import Header from '../../components/Header/Header'
import { galaxia } from "../../assets"
import Container from '../../components/Container/Container'
import Cards from '../../components/Cards/Cards'
import Typical from 'react-typical'
import Button from '../../components/Button/Button'
import * as C from "./homeStyles"
import { cardsArray } from "./cardValues"

const Home = () => {
  const content = <>
    <h1><C.Span>Q</C.Span>ue Tal Uma Viagem No Univeverso?</h1>
    <p>Liberte Sua Imaginação</p>
    <Typical 
        steps={["Venha Saber Mais Sobre O Universo", 1000]}
    />
    <Button target="#home" text="Explorar Mais" />
  </>

  return (
    <div>
        <Header/>
        <Container phone bg="video" src={galaxia} content={content}/>
        <Cards cards={cardsArray} isAnimation/>
        
    </div>
  )
}

export default Home