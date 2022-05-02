import styled from "styled-components";

export const Navegation = styled.nav`
    width: 45%;

    figure{
        text-align: end;
    }
    @media screen and (min-width: 768px){
        width: 500px;
        figure{
            display: none;
        }
    }
`

export const Menu = styled.ul`
    position: absolute;
    left: 0%;
    top: 9%;

    display: ${prop => prop.displaymenu ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: #000000d2;
    height: 250px;
    width: 100%;

    z-index: 1;

    li a{
        color: #fff;
        font-weight: 800;
        font-family: 'Bebas Neue', cursive;

        letter-spacing: 1px;
    }

    @media screen and (min-width: 768px){
        position: relative;
        top: 0;
        display: flex;
        flex-direction: row;
        height: 30px;
        width: 100%;
    }
`