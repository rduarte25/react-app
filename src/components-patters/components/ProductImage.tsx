import { useContext } from "react";

import noImage from "../assets/no-image.jpg";
import { ProductImageProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ image = "", className }: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  let imageToShow: string;

  if (image) {
    imageToShow = image;
  } else if (product.image) {
    imageToShow = product.image;
  } else {
    imageToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imageToShow}
      alt={`${product.title} - ${product.id}`}
    />
  );
};
