import { BsCart4 } from "react-icons/bs";
import { Button, ContainerButton } from "./style";

function AddCar({ setCheckCar }) {
  return (
    <ContainerButton>
      <Button
        onClick={() => {
          setCheckCar(true);
        }}
      >
        carrinho de compras <BsCart4 color="#1B82DB" />
      </Button>
    </ContainerButton>
  );
}

export default AddCar;
