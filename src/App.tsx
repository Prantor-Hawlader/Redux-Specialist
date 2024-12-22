import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex border border-purple-300 p-10 bg-cyan-200">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 text-white bg-green-500 rounded-md font-semibold text-xl"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue({ value: 5 }))}
          className="px-3 mx-2 py-2 text-white bg-green-500 rounded-md font-semibold text-xl"
        >
          Increment by 5
        </button>
        <h1 className="text-3xl mx-10">{count} </h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 text-white bg-red-500 rounded-md font-semibold "
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
