import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-color: #000;    
    overflow-y: scroll;

    color: #fff;
`

export const Header = styled.header`
    height: 80px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media screen and (min-width: 768px){
        flex-wrap: nowrap;
        justify-content: space-between;
    }

`