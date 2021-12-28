import React from "react";
import { useStore } from "../../store/storeProvider";
import { logoutAction } from "../../store/actions";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { store, dispatch } = useStore();
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch(logoutAction());
    navigate("/login");
  };

  return (
    <div className="mt-2 px-2">
      <h1 className="display-4">Welcome to home page {store.name}!</h1>
      <button type="submit" className="btn btn-success" onClick={clickHandler}>
        Log Out
      </button>
    </div>
  );
};

export default HomePage;
