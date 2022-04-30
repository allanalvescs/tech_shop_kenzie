import { Link } from "react-router-dom";
import {RiMenu3Fill} from 'react-icons/ri'


function NavPage() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Products</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <figure>
        <RiMenu3Fill color="#fff" size="30px"/>
      </figure>
    </nav>
  );
}

export default NavPage;