import Login from "./components/login/Login";
import { useState } from "react";
import Counter from "./components/counter/Counter";

const DUMMY_INFO = {
  username: "testuser",
  password: "abc@1234",
};

function App() {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(null);

  const validHandler = async (info) => {
    const response = await fetch(
      "https://react-http-3cac6-default-rtdb.firebaseio.com/.json"
    );

    const data = await response.json();

    console.log(data);
    if (data && data.users) {
      for (const key in data.users) {
        if (
          info.username === data.users[key].email &&
          info.password === data.users[key].password
        ) {
          setIsValid(true);
          setError(false);
          return;
        } else {
          setError(true);
        }
      }
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
