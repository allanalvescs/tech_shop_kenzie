import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { Menu, Navegation } from "./style";

import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

function NavPage() {
  const { activeMenu, setActiveMenu } = useContext(Context);

  const showMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <Navegation>
      <figure onClick={showMenu}>
        <RiMenu3Fill color="#fff" size="45px" />
      </figure>
      <Menu displaymenu={activeMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Products</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </Menu>
    </Navegation>
  );
}

export default NavPage;
