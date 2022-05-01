import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

import NotFound from "../NotFound";
import Product from "../Products";

function ListProducts({ isfilter }) {
  const { store, filterProducts } = useContext(Context);

  return (
    <ul>
      {isfilter ? (
        filterProducts.length === 0 ? (
          <NotFound />
        ) : (
          filterProducts.map((product) => {
            return (
              <Product
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
              />
            );
          })
        )
      ) : (
        store.map((product) => {
          return (
            <Product
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          );
        })
      )}
    </ul>
  );
}

export default ListProducts;
