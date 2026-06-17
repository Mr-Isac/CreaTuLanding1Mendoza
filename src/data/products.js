const products = [
  {
    id: 1,
    title: "Remera Nike",
    price: 100,
    category: "remeras",
    description: "Remera deportiva Nike"
  },
  {
    id: 2,
    title: "Remera Adidas",
    price: 120,
    category: "remeras",
    description: "Remera deportiva Adidas"
  },
  {
    id: 3,
    title: "Gorra Puma",
    price: 80,
    category: "gorras",
    description: "Gorra deportiva Puma"
  },
  {
    id: 4,
    title: "Zapatillas Converse",
    price: 300,
    category: "zapatillas",
    description: "Zapatillas urbanas"
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((item) => item.id === Number(id)));
    }, 1000);
  });
};