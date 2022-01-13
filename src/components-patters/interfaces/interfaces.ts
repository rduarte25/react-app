import { ReactElement } from "react";

export interface ProductCardProps {
    children?:ReactElement | ReactElement[]
    product: Product
}

export interface Product {
    id: string;
    title: string;
    image?: string;

}

export interface ProductContextProps { 
    counter: number;
    handleIncrease: (value:number) => void;
    product: Product
}

export interface ProductButtonsProps {
    counter: number;
    handleIncrease: (value:number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: ({ title }: { title?: string}) => JSX.Element;
    Image: ({ image }: { image?: string}) => JSX.Element;
    Buttons: () => JSX.Element;
}