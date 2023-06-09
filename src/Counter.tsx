import { decrement, increment, fetchCount } from "./reducer";
import { useAppDispatch, useAppSelector } from "./store";

export function Counter(props: {
  value: number;
  isFetching: boolean;
  increment: (n: number) => void;
  decrement: (n: number) => void;
  fetch: () => void;
}) {
  return (
    <div>
      <button onClick={() => props.decrement(1)}>-</button>
      <span> {props.value} </span>
      <button onClick={() => props.increment(1)}>+</button>
      <button onClick={() => props.fetch()} disabled={props.isFetching}>{ props.isFetching ? 'Fetching...' :  'Fetch' }</button>
    </div>
  );
}

export function ConnectedCounter() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.count);
  const isFetching = useAppSelector((state) => state.isFetching);
  return (
    <Counter
      value={value}
      isFetching={isFetching}
      increment={(n) => dispatch(increment(n))}
      decrement={(n) => dispatch(decrement(n))}
      fetch={() => dispatch(fetchCount()) }
    />
  );
}
