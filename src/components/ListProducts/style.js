import styled, { keyframes } from "styled-components";

const Show = keyframes`
    from{
        opacity: 0;
        transform: scale(0.9);
    }

    to{
        opacity: 1;
        transform: scale(1);
    }
`

export const List = styled.ul`
 display: flex;
 flex-direction: column;
 align-items: center;

 max-width: 1100px;

 animation: ${Show} 2s ;

 @media screen and (min-width: 768px){
     flex-direction: row;
     justify-content: space-around;
     flex-wrap: wrap;

     margin: 0 auto;
 }
`

export const Loading = styled.h2`
    text-align: center;
    color: #0066FF;
    font-size: 2rem;
`