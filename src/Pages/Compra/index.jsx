import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../../Context/AuthContext";
import { useContext } from "react";
import ProductPay from "../../components/ProductPay";

function Compra() {
  const [paymentProduct, setPaymentProduct] = useState({});

  const { store } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    setPaymentProduct(store.find((product) => product.title === id));
  }, [id]);
  console.log(paymentProduct);
  return (
    <div>
      <h1>PAGAMENTO</h1>
      <ProductPay
        image={paymentProduct.image}
        description={paymentProduct.description}
        title={paymentProduct.title}
        price={paymentProduct.price}
      />
    </div>
  );
}

export default Compra;
