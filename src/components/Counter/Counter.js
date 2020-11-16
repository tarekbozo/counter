import React, { useContext, useEffect } from 'react';
import { CounterContext } from '../../context/CounterContextProvider';
import Plus from './../ui/Plus';
import { Button, Icon } from './../ui/Button';

export const Counter = () => {
  const [count, setCount] = useContext(CounterContext);

  const incrementCount = () => {
    setCount((currCount) => currCount + 1);
  };

  const decrementCount = () => {
    setCount((currCount) => currCount - 1);
  };

  useEffect(() => {
    setCount(count);
  }, [count, setCount]);

  return (
    <div>
      <Button onClick={count <= 0 ? null : decrementCount}>
        <Icon /> decrement
      </Button>
      <strong>Counter: {count}</strong>
      <Button primary onClick={count > 6 ? null : incrementCount}>
        <Plus /> increment
      </Button>
    </div>
  );
};
