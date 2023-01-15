import React, {useState} from 'react'
import {GiBurningMeteor, GiMineExplosion} from "react-icons/gi"
import "./cardsStyle.scss"

const Cards = ({cardsArray, isAnimation, id, titles}) => {

  const [modalActive0, setModalActive0] = useState(false)
  const [modalActive1, setModalActive1] = useState(false)
  const [modalActive2, setModalActive2] = useState(false)

  function handleActiveModal(num){
    if(num === 0){
      setModalActive0(true)
    }
    if(num === 1){
      setModalActive1(true)
    }
    if(num === 2){
      setModalActive2(true)
    }
  }

  function handleDesactiveModal(num){
    if(num === 0){
      setModalActive0(false)
    }
    if(num === 1){
      setModalActive1(false)
    }
    if(num === 2){
      setModalActive2(false)
    }
  }

  return (
    <section id={id} className='cards__container' >
      {isAnimation && (
        <>
          <GiBurningMeteor className='Cards__metor-icon'/>
          <GiMineExplosion className='Cards__explosion-icon'/>
        </>
      )}
      <div className='cards__container-title'>
          <h4>{titles.h4}</h4>
          <h2>{titles.h2}</h2>
      </div>
      <div className='cards__container-cards'>
          <div className="cards-item">
            <img src={cardsArray[0].img} alt={cardsArray[0].title} />
            <h4>{cardsArray[0].title}</h4>
            <button onClick={() => handleActiveModal(0)}>Ler mais</button>
          </div>

          <div className="cards-item">
            <img src={cardsArray[1].img} alt={cardsArray[1].title} />
            <h4>{cardsArray[1].title}</h4>
            <button onClick={() => handleActiveModal(1)}>Ler mais</button>
          </div>
           

          <div className="cards-item">
            <img src={cardsArray[2].img} alt={cardsArray[2].title} />
            <h4>{cardsArray[2].title}</h4>
            <button onClick={() => handleActiveModal(2)}>Ler mais</button>
          </div>
            
        
      </div>
            <div className={`${modalActive0? "faded" : ""}`} onClick={() => handleDesactiveModal(0)}></div>
            <div className={modalActive0 ? "myModal visible" : "myModal"}>
              <div className="modal__title">
              <h3>{cardsArray[0].title}</h3>
              <button onClick={() => handleDesactiveModal(0)}>Fechar</button>
            </div>
            <hr />
             <div>{cardsArray[0].description}</div>
            </div>

            <div className={`${modalActive1? "faded" : ""}`} onClick={() => handleDesactiveModal(1)}></div>
            <div className={modalActive1 ? "myModal visible" : "myModal"}>
              <div className="modal__title">
              <h3>{cardsArray[1].title}</h3>
              <button onClick={() => handleDesactiveModal(1)}>Fechar</button>
            </div>
            <hr />
             <div>{cardsArray[1].description}</div>
            </div>

            <div className={`${modalActive2? "faded" : ""}`} onClick={() => handleDesactiveModal(2)}></div>
            <div className={modalActive2 ? "myModal visible" : "myModal"}>
              <div className="modal__title">
              <h3>{cardsArray[2].title}</h3>
              <button onClick={() => handleDesactiveModal(2)}>Fechar</button>
            </div>
            <hr />
             <div>{cardsArray[2].description}</div>
            </div>
      
    </section>
  )
}

export default Cards