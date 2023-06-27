import React, { useState } from 'react'
import { GiBurningMeteor, GiMineExplosion } from "react-icons/gi"
import "./cardsStyle.scss"
import Modal from '../modal/Modal'

const Cards = ({ cardsArray, isAnimation, id, titles }) => {

  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (title, description) => {
    setSelectedCard({ title, description });
  };

  const handleModalClose = () => {
    setSelectedCard(null);
  };


  return (
    <section id={id} className='cards__container' >
      {isAnimation && (
        <>
          <GiBurningMeteor className='Cards__metor-icon' />
          <GiMineExplosion className='Cards__explosion-icon' />
        </>
      )}


      <div className='cards__container-title'>
        <h4>{titles.h4}</h4>
        <h2>{titles.h2}</h2>
      </div>


      <div className='cards__container-cards'>
        {cardsArray.map((card, i) => (
          <div key={i} className="cards-item">
          <img src={card.img} alt={card.title} />
          <h4>{card.title}</h4>
          <button onClick={() => handleCardClick(card.title, card.description)}>Ler mais</button>
          {selectedCard && (
            <Modal description={selectedCard.description} title={selectedCard.title} onclose={handleModalClose} selected={selectedCard} />
          )}
        </div>
        ))}
      </div>


      

    </section>
  )
}

export default Cards