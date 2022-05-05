import { Content, CustomizerProduct, ImageProduct } from "./style";

function ProductPay({ image, description, title, price }) {
  return (
    <CustomizerProduct>
      <ImageProduct>
        <img src={image} alt={description} />
      </ImageProduct>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          {Number(price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </Content>
    </CustomizerProduct>
  );
}

export default ProductPay;
