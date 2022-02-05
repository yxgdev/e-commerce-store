import React from "react";
import { popularProducts } from "../../data";
import Product from "../Product/Product";
import { Container } from "./ProductsStyles";
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
