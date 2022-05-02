import { Item } from "./style";
import { FaTrashAlt, FaClipboardCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context/AuthContext";
function CardProduct({ title, image, price, description, id }) {
  const { currentSale, setCurrentSale } = useContext(Context);

  const handleRemoveItem = (productId) => {
    setCurrentSale([
      ...currentSale.filter((product) => product.id !== productId),
    ]);
  };
  return (
    <Item>
      <img src={image} alt={description} />
      <h3>{title.length > 15 ? `${title.slice(0, 15)}...` : title}</h3>
      <FaTrashAlt color="red" onClick={() => handleRemoveItem(id)} />
      <Link to="/compra/product">
        <FaClipboardCheck size="15" />
      </Link>
      <p>R$ {price}</p>
    </Item>
  );
}

export default CardProduct;
