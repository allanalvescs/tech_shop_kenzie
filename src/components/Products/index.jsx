import {
  CarBuy,
  ContainerButtons,
  Image,
  Information,
  Item,
  Price,
} from "./style";

import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

function Product({ id, title, image, price, description }) {
  const { setCurrentSale, currentSale, store } = useContext(Context);

  const handleAddBuy = (productId) => {
    const valid = currentSale.some((value) => value.id === productId);
    if (!valid) {
      setCurrentSale([
        ...currentSale,
        store.find((value) => value.id === productId),
      ]);
    }
  };
  return (
    <Item>
      <Image>
        <img src={image} alt={description} />
      </Image>
      <Information>
        <CarBuy>
          <BsCart4 size="20" color="#000" />
        </CarBuy>
        <h2>{title}</h2>
        <p>{description}</p>
        <Price>R$ {price}</Price>

        <ContainerButtons>
          <button>Comprar</button>
          <button onClick={() => handleAddBuy(id)}>
            Adicionar ao carrinho
          </button>
        </ContainerButtons>
      </Information>
    </Item>
  );
}

export default Product;
