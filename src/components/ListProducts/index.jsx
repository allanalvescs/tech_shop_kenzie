import { useContext } from "react";
import { Context } from "../../Context/AuthContext";
import Product from "../Products";

function ListProducts() {
  const { store } = useContext(Context);

  return (
    <ul>
      {store.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        );
      })}
    </ul>
  );
}

export default ListProducts;
