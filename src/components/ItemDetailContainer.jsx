import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then((data) => {
      setProduct(data);
    });
  }, [itemId]);

  if (!product) return <h2>Cargando...</h2>;

  return <ItemDetail product={product} />;
}
