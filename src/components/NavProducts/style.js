import styled from "styled-components";

export const Nav = styled.nav`
   background-color: #0066FF;
   height: 40px;
   width: 100%;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 100%;
  max-width: 500px;
  margin: 0 auto;

  li{
      font-weight: 700;
      text-decoration: underline;
  }
`