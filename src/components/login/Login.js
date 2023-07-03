import style from "./Login.module.css";
import Card from "../UI/Card";
import { useState } from "react";

const Login = (props) => {
  const [updatedInfo, setUpdatedInfo] = useState({
    username: "",
    password: "",
  });

  const usernameHandler = (event) => {
    setUpdatedInfo((prevInfo) => {
      return {
        ...prevInfo,
        username: event.target.value,
      };
    });
  };

  const passwordHandler = (event) => {
    setUpdatedInfo((prevInfo) => {
      return {
        ...prevInfo,
        password: event.target.value,
      };
    });
  };

  const loginHandler = (event) => {
    event.preventDefault();

    props.onValid(updatedInfo);
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <Card>
        <form className={style.form} onSubmit={loginHandler}>
          <div>
            <label>Username: </label>
            <input type="text" onChange={usernameHandler} />
          </div>

          <div>
            <label>Password: </label>
            <input type="password" onChange={passwordHandler} />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
