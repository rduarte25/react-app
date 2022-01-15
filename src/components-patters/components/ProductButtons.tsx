import { useCallback, useContext } from "react";
import { ProductButtonProps } from "../interfaces/interfaces";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";



export const ProductButtons = ({className, style}: ProductButtonProps) => {
    
    //TODO: maxCount
    const { counter, handleIncrease, maxCount } = useContext(ProductContext);

    //TODO: isMaxReached = useCallback, dependence [counter, maxCount]
    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )

    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button className={styles.buttonMinus} onClick={() => handleIncrease(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button 
                className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabled : ''}`} 
                onClick={() => handleIncrease(1)}
                disabled={isMaxReached()}
            >+</button>
        </div>
    );
}