import { useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export const ProductButtons = () => {
    
    const { counter, handleIncrease } = useContext(ProductContext);

    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => handleIncrease(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={() => handleIncrease(1)}>+</button>
        </div>
    );
}