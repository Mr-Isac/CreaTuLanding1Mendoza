import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
}
