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

export const ContainerCar = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    background-color: #000000d2;

    display: flex;
    justify-content: center;
    align-items: center;

`

export const Car = styled.div`
     width: 300px;
    height: 300px;

    border: solid 2px #fff;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #000;
    animation: ${Show} 1.5s;

    h2{
        color: #fff;
        text-align: center;

        width: 100%;
        font-size: 1.1rem;
       
    }
`
export const ContainerList = styled.div`
    width: 100%;
    height: 300px;

`

export const ContainerInitial = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    height: 45px;
    width: 100%;
    
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #1B82DB;
`