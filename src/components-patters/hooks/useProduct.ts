import { useEffect, useState, useRef } from 'react';
import { usePropsArgs } from "../interfaces/interfaces";

export const useProduct = ({ onChange, product, value = 0 }: usePropsArgs) => {
  const [counter, setCounter] = useState(value);
  
  const isControlled = useRef(!!onChange);

  const handleIncrease = (value: number) => {
    if (isControlled.current) {
      return onChange!({count:value, product});
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product: product });
  };
  
  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    handleIncrease,
  };
};
