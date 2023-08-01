import React from 'https://cdn.skypack.dev/react@17';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17';
import Test from './Test';

const Counter: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);
  const handleClick = React.useCallback(
    () => setCount((n) => n + 1),
    [setCount]
  );
  return (
    <div>
      <Test />
      <div>Count: {count}</div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
ReactDOM.render(<Counter />, document.getElementById('app'));
