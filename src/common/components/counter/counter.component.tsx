import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';

interface CounterProps {
  onRestart: () => void;
}

export const Counter: FC<PropsWithChildren<CounterProps>> = ({
  children,
  onRestart,
}) => {
  const [counter, setCounter] = useState(60);
  const [isDisabled, setIsDisabled] = useState(false);

  const counterRef = useRef<NodeJS.Timer>();

  const startCounter = (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (event) {
      onRestart();
    }

    setCounter(60);
    setIsDisabled(true);
    counterRef.current = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);
  };

  useEffect(() => {
    startCounter();
  }, []);

  useEffect(() => {
    if (counter === 0) {
      clearInterval(counterRef.current);
      setIsDisabled(false);
    }
  }, [counter]);

  return (
    <button
      className="text-gray-900 text-sm disabled:cursor-not-allowed"
      disabled={isDisabled}
      onClick={startCounter}
    >
      {children}
      {isDisabled && ` (${counter} сек)`}
    </button>
  );
};
