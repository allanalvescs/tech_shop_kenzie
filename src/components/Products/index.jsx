function Product({ title, image, price, description }) {
  return (
    <li>
      <figure>
        <img src={image} alt={description} />
      </figure>
      <div>
        <img src="#" alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>R$ {price}</p>

        <button>Comprar</button>
      </div>
    </li>
  );
}

export default Product;
