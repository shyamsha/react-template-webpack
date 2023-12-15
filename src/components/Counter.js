import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorFunction, setCountVal } from "../store/reducerFunctions";

const Counter = () => {
  const dispatch = useDispatch();
  const { countVal } = useSelector(selectorFunction);
  const handleAdd = () => {
    dispatch(setCountVal(countVal + 1));
  };

  return (
    <div className="App">
      <button className="text-center" onClick={handleAdd}>
        ADD +
      </button>
      <h1>Count-{countVal}</h1>
    </div>
  );
};

export default Counter;
