import styled from 'styled-components'

export const CustomizerProduct = styled.div`
    max-width: 900px;
    padding: 15px 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    border: solid 3px #5E52FF;
    background-color: #000;
    color: #fff;

`
export const ImageProduct = styled.figure`
    width: 100%;
    height: 100%;
    padding: 5px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    img{
        height: 150px;
        width: 100px;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 300px;
    padding: 10px;

    p{
        color: #1B82DB;
        font-size: 1.2rem;
    }


    p:nth-child(3){
        font-size: 1.5rem;
        font-weight: bold;

        text-align: end;
    }
`