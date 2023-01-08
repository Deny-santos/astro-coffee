import styled from "styled-components";

export const videoContainer = styled.div`
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    overflow: hidden;
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
        color: gray;
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

