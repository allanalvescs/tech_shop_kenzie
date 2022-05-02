import styled from "styled-components";

export const List = styled.ul`
 display: flex;
 flex-direction: column;
 align-items: center;

 max-width: 1100px;

 @media screen and (min-width: 768px){
     flex-direction: row;
     justify-content: space-around;
     flex-wrap: wrap;

     margin: 0 auto;
 }
`