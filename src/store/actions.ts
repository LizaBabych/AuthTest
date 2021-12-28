import { LoginActionI, LoginPayload } from "./storeTypes";

export const actionsTypes = {
  login: "LOGIN",
  logout: "LOGOUT",
};

export const loginAction = (payload: LoginPayload): LoginActionI => ({
  type: actionsTypes.login,
  payload,
});

export const logoutAction = () => ({
  type: actionsTypes.logout,
});
