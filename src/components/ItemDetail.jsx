import ItemCount from "./ItemCount";

export default function ItemDetail({ product }) {
  return (
    <div className="detail-card">
      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <h3>${product.price}</h3>

      <ItemCount />

      <button className="add-cart-btn">Agregar al carrito</button>
    </div>
  );
}
