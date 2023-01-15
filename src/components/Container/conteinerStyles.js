import styled from "styled-components";

export const videoContainer = styled.section`
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    overflow: hidden;

    @media screen and (max-width:1024px) {
        video {
            margin-left: -700px;
        }
        
    }
`

export const ImageContainer = styled.section`
    max-width: 100vh;
    width: 100vw;
    background-color: tomato;
    
   

    img {
        display: block;
        min-height: 100%;
        min-width: 100%;
    }

    @media screen and (max-width:1024px) {
        img{
            margin-left: -700px;
        }
    }
`

export const DivOpacity  = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const Content = styled.div`
    height: 60vh;
    width: 70%;
    margin-top: 1rem;


    h1 {
        font-weight: bolder;
        color: white;
        margin-bottom: 2rem;
        
    }
    p {
        font-size: 22px;
        color: rgb(226, 223, 223);
        font-weight: 400;
        &:nth-child(3){
            margin-bottom: 3rem;
        }
        
        @media screen and (max-width: 800px) {
            &:nth-child(1) {
                display: none;
            }    
        }
    } 
    
`

