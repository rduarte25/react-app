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
  initialValue,
}: ProductCardProps) => {
  const { counter, handleIncrease, handleReset, maxCount, isMaxCountReached } =
    useProduct({ product, onChange, value, initialValues: initialValue });

  return (
    <Provider
      value={{
        counter,
        handleIncrease,
        handleReset,
        isMaxCountReached,
        maxCount,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          handleIncrease,
          handleReset,
          isMaxCountReached,
          maxCount,
          product,
        })}
      </div>
    </Provider>
  );
};
