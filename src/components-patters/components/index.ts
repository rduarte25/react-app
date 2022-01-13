import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardHoc } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../interfaces/interfaces';
export { ProductButtons } from './ProductButtons';
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHoc, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
});