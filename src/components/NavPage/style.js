import styled from "styled-components";

export const Navegation = styled.nav`
    width: 45%;

    figure{
        text-align: end;
    }
`

export const Menu = styled.ul`
    position: absolute;
    left: 0%;
    top: 7%;

    display: ${prop => prop.displaymenu ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: #000;
    height: 200px;
    width: 100%;

    li{

    }

    li a{
        color: #fff;
        font-weight: 800;
        font-family: 'Bebas Neue', cursive;

        letter-spacing: 1px;
    }
`