import { useContext } from "react";
import { Context } from "../../Context/AuthContext";
import { Nav, List } from "./style";

function NavProducts({ setIsFilter }) {
  const { store, setFilterProducts } = useContext(Context);

  const filterbybrand = (brand) => {
    const filterbrand = store.filter((product) => {
      const splitTitle = product.title.split(" ");
      const valid = splitTitle.some((value) => value === brand);

      return valid;
    });
    setIsFilter(true);
    setFilterProducts(filterbrand);
  };
  return (
    <Nav>
      <List>
        <li>todos</li>
        <li onClick={() => filterbybrand("Samsung")}>Samsung</li>
        <li onClick={() => filterbybrand("Xiaomi")}>Xiaomi</li>
        <li onClick={() => filterbybrand("iPhone")}>Iphone</li>
        <li onClick={() => filterbybrand("LG")}>LG</li>
      </List>
    </Nav>
  );
}
export default NavProducts;
