import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    max-width: 500px;
    width: 300px;
    margin: 15px 0;
    `

export const Image = styled.figure`
    width: 100%;
    height: 160px;
    background-image: linear-gradient(#5E52FF,#1B82DB);
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    img{
        max-width: 150px;
        height: 100px;
    }
    `

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
    width: 100%;
    
    padding: 10px;
    background-color: #5E52FF;
    flex-basis: 312px;
    
    h2{
        font-size: 1rem;
        max-width: 500px;
        color: #000;

        width: 80%;
    }

    
`

export const CarBuy = styled.figure`
  width: 30px;
  height: 30px;
  background-color: #fff;

  border: solid 3px #000;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  
`

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 1px;
`

export const Descripition = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;

  button{
        width: 120px;
        height: 45px;

        border: solid 2px #000;
        border-radius: 25px;
        cursor: pointer;
        
        background-color: #1B82DB;
        color: #fff;
        font-family: 'Bebas Neue', cursive;
        font-size: 1rem;
    }

`