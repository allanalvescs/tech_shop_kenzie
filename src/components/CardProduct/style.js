import styled from "styled-components";

export const Item = styled.div`
    width: 100%;
    height: 60px;
    margin: 10px 0;
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: baseline;
    background-color: #0066FF;

    img{
        width: 40px;
        height: 40px;
    }

    h3{
        font-size: 0.9rem;
        color: #fff;
        width: 30%;
        align-self: center;
    }

    p{
        color: #fafafa;
        font-size: 0.9rem;
        width: 30%;
        text-align: end;
    }

    svg{
        position: relative;
        bottom: 65%;
        left: 35%;
    }

    a{
        position: relative;
        bottom: 65%;
        left: 15%;
        
        font-size: 0.7rem;
        color: #54FA31;
        font-weight: 800;
    }
`