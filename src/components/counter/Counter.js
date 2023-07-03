import { useState } from "react";
import style from "./Counter.module.css";
import Card from "../UI/Card";

const Counter = () => {
  const [value, setValue] = useState(1);

  const incrHandler = () => {
    setValue(value + 1);
  };
  const decrHandler = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <Card>
        <button className={style.button} onClick={incrHandler}>
          Increment
        </button>
        <h1>{value}</h1>
        <button className={style.button} onClick={decrHandler}>
          Decrement
        </button>
      </Card>
    </div>
  );
};

export default Counter;
