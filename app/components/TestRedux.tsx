'use client';


import type { RootState } from './../Redux/Store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './../Redux/Slices/CounterSlice';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main >
      <button 
        onClick={() => dispatch(increment())}
      >Increment</button>
      <span>{count}</span>
      <button 
        onClick={() => dispatch(decrement())}
      >Decrement</button>
      <button 
        onClick={() => dispatch(incrementByAmount(2))}
      >Increment by 2</button>
    </main>
  )
}