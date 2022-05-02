import { Car, ContainerCar, ContainerInitial, ContainerList } from "./style";
import { FaRegTimesCircle } from "react-icons/fa";
function CarBuy({ setCheckCar }) {
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
        <ContainerList></ContainerList>
      </Car>
    </ContainerCar>
  );
}

export default CarBuy;
