import { Car, ContainerCar, ContainerInitial, ContainerList } from "./style";
import { FaRegTimesCircle } from "react-icons/fa";

import { useContext } from "react";
import { Context } from "../../Context/AuthContext";
import CardProduct from "../CardProduct";
function CarBuy({ setCheckCar }) {
  const { currentSale } = useContext(Context);
  return (
    <ContainerCar>
      <Car>
        <ContainerInitial>
          <h2>Carrinho de Compras</h2>
          <FaRegTimesCircle
            size="30"
            onClick={() => {
              setCheckCar(false);
            }}
          />
        </ContainerInitial>
        <ContainerList>
          {currentSale.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          ))}
        </ContainerList>
      </Car>
    </ContainerCar>
  );
}

export default CarBuy;
