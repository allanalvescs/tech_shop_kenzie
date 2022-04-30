import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { Menu, Navegation } from "./style";

function NavPage() {
  return (
    <Navegation>
      <figure>
        <RiMenu3Fill color="#fff" size="45px" />
      </figure>
      <Menu>
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
