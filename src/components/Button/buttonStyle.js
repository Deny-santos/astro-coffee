import styled from "styled-components";

export const MyButton = styled.a`
    color: black;
    text-decoration: none;
    font-weight: 400;
    font-size: 22px;
    letter-spacing: 1px;
    max-width: 300px;
    padding: .8rem 3rem;
    background-color: rgba(0,212,255,1);
    border-radius: 10px;
    border: 1px solid rgba(0,212,255,1);
    transition: all .5s;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: transparent;
    }
` 