import React from "react";
import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Container } from "./CategoriesStyles";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
