import { useEffect, useState, useRef } from 'react';
import { usePropsArgs } from '../interfaces/interfaces';

export const useProduct = ({ onChange, product, value = 0, initialValues }: usePropsArgs) => {
  const [counter, setCounter] = useState<number>( initialValues?.count || value );

  const isMounted = useRef(false);

  const handleIncrease = (value: number) => {
    
    let newValue = Math.max(counter + value, 0);
    if ( initialValues?.maxCount ) {
      newValue = Math.min(newValue, initialValues.maxCount);
    };
    setCounter(newValue);
    onChange && onChange({ count: newValue, product: product });
  };
  
  useEffect(() => {
    isMounted.current = true;
  });

  useEffect(() => {
    if (isMounted.current) return;
    setCounter(value);
  }, [value]);

  const handleReset = () => {
    setCounter(initialValues?.count || value);
  }

  return {
    counter,
    handleIncrease,
    handleReset,
    isMaxCountReached: !! initialValues?.maxCount && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount
  };
};
