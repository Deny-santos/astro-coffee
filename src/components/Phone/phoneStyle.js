import styled from "styled-components";

export const Mobile = styled.div`
    height: 80vh;
    width: 18rem;
    background-color: black;
    position: absolute;
    top: 13rem;
    right: 7rem;
    border-radius: 2rem;
    padding: .5rem;
    z-index: 3;
    
    @media screen and (max-width: 1024px) {
    display: none;
}
`

export const screen = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    border-radius: 2rem;
    z-index: 4;
    display: flex;
    flex: 1;
    flex-direction: column;

` 

export const BarTop = styled.div`
    height: 4.5%;
    border-radius: 2rem 2rem 0 0;
    background-color: gray;
    display: flex;
    justify-content: space-between;

    span {
        font-weight: 300;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding-left: 13px;
        color: white;
    }
    .phone__icons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: .7rem;
        margin-right: 9px;
    }
    svg {
        font-size: .8rem;
        color: white;
    }

    .cam {
        font-size: 20px;
        margin-left: 30px;
        background-color:  rgba(0, 0, 0, 0.719);
        border-radius: 0 0 2rem 2rem;
    }
`
export const MobContent = styled.div`
    height: 86% ;
`
export const BarDown = styled.div`
    height: 9.5%;
    border-radius: 0 0 2rem 2rem;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    svg {
        color: gray;
        font-size: 30px;
    }
`