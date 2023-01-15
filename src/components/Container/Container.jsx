import React from 'react'
import * as C from "./conteinerStyles"
import "./container.css"
import Phone from '../Phone/Phone'


const Container = ({ phone, bg , src, content}) => {
  return (
    <section className='app__container'>
        <div className='app__container2'>
            {bg === "video" ?
                <C.videoContainer>
                    <video loop autoPlay muted>
                        <source src={src} />
                    </video>
                </C.videoContainer> : 
                <C.ImageContainer>
                    <img src={src} alt="" />
                </C.ImageContainer>
            }
            <C.DivOpacity>
            {content && (
                <C.Content>
                    {content}
                </C.Content> 
            )}
            </C.DivOpacity>
        </div>
        { phone &&
            <Phone />
        }
    </section>
  )
}

export default Container