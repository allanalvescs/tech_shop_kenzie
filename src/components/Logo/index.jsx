import LogoPage from "../../images/logo.png";
import { ContainerLogo } from "./style";

function Logo() {
  return (
    <ContainerLogo>
      <img src={LogoPage} alt="Logo Kenzie Academy" />
      <h2>TECH</h2>
    </ContainerLogo>
  );
}

export default Logo;
