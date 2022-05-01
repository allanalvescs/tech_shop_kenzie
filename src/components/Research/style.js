import styled from "styled-components";

export const ContainerResearch = styled.form`
    height: 45px;
    width: 300px;
    max-width: 350px;

    display: flex;
    justify-content: center;

    margin: 25px auto;
    input{
        padding: 5px;
        border: solid 2px #0066FF;
        width: 80%;
    }

    input::placeholder{
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 1rem;
        font-weight: 700;
    }
    button{
        width: 20%;
        background-color: #0066FF;
        border: solid 2px #0066FF;
    }
`