import Login from "./components/login/Login";
import { useState } from "react";
import Counter from "./components/counter/Counter";

const DUMMY_INFO = [
  {
    username: "abcdef",
    password: "12345",
  },
  { username: "ghijkl", password: "67890" },
];

function App() {
  const [isValid, setIsValid] = useState(false);

  const validHandler = (info) => {
    setIsValid(true);
  };

  return (
    <div>
      {isValid ? <Counter></Counter> : <Login onValid={validHandler}></Login>}
    </div>
  );
}

export default App;
