import Login from "./components/login/Login";
import { useState } from "react";
import Counter from "./components/counter/Counter";

const DUMMY_INFO = {
  username: "abcdef",
  password: "12345",
};

function App() {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);

  const validHandler = (info) => {
    if (
      info.username === DUMMY_INFO.username &&
      info.password === DUMMY_INFO.password
    ) {
      setIsValid(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {!isValid && <Login onValid={validHandler}></Login>}
      {error && <h3>Enter correct username and password.</h3>}
      {isValid && <Counter></Counter>}
    </div>
  );
}

export default App;
