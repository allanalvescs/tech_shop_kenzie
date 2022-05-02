import { CarBuy, Image, Information, Item, Price } from "./style";
import { BsCart4 } from "react-icons/bs";

function Product({ title, image, price, description }) {
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

        <button>Comprar</button>
      </Information>
    </Item>
  );
}

export default Product;
