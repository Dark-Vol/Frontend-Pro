import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../features/counterSlice'
import type { RootState, AppDispatch } from '../store/store'
import "./Counter.scss"

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="counter">
      <h1 className="counter__value">Value: {count}</h1>
      <div className="counter__buttons">
        <button onClick={() => dispatch(increment())} className="counter__button">+</button>
        <button onClick={() => dispatch(decrement())} className="counter__button">-</button>
      </div>
    </div>
  )
}
