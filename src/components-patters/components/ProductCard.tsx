import { createContext } from "react";

import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

export const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: ProductCardProps) => {
  const { counter, handleIncrease } = useProduct({ product, onChange, value });

  return (
    <Provider
      value={{
        counter,
        handleIncrease,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
