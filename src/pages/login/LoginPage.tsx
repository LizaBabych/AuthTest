import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useStore } from "../../store/storeProvider";
import { loginAction } from "../../store/actions";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useStore();
  const navigate = useNavigate();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginAction({ email: data.email, password: data.password }));
    navigate("/");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email address"
          value={data.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, email: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={data.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, password: e.target.value })
          }
        />
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default LoginPage;
