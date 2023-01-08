import Button from "../Button/Button"
import React from 'react'
import {GiBurningMeteor, GiMineExplosion} from "react-icons/gi"
import "./cardsStyle.scss"

const Cards = (props) => {
  return (
    <section id='home' className='cards__container' >
      {props.isAnimation && (
        <>
          <GiBurningMeteor className='Cards__metor-icon'/>
          <GiMineExplosion className='Cards__explosion-icon'/>
        </>
      )}
      <div className='cards__container-title'>
          <h4>Qual Seu Telescópio Favorito?</h4>
          <h2>Conheça o Top 3</h2>
      </div>
      <div className='cards__container-cards'>
        {props.cards.map((card, index) => (
          <div className="cards-item">
            <img src={card.img} alt="" />
            <h4>{card.title}</h4>
            <Button target="" text="Ler Mais"/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cards