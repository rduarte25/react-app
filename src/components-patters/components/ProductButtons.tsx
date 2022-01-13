import { useContext } from "react";
import { ProductButtonProps } from "../interfaces/interfaces";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";



export const ProductButtons = ({className, style}: ProductButtonProps) => {
    
    const { counter, handleIncrease } = useContext(ProductContext);

    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button className={styles.buttonMinus} onClick={() => handleIncrease(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={() => handleIncrease(1)}>+</button>
        </div>
    );
}