import { ReactElement, CSSProperties } from "react";

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  product: Product;
  className?: string;
  style?: CSSProperties;
}

export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextProps {
  counter: number;
  handleIncrease: (value: number) => void;
  product: Product;
}

export interface ProductButtonsProps {
  counter: number;
  handleIncrease: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title:   (Props: ProductTitleProps)   => JSX.Element;
  Image:   (Props: ProductImageProps)   => JSX.Element;
  Buttons: (Props: ProductButtonProps)  => JSX.Element;
}

export interface ProductImageProps {
  image?: string;
  className?: string;
  style?: CSSProperties;
}

export interface ProductTitleProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export interface ProductButtonProps {
  className?:string;
  style?: CSSProperties;
}
