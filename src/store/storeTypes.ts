export interface State {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export type Reducer = (state: State) => State;

interface BaseActionI {
  type: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginActionI extends BaseActionI {
  payload: LoginPayload;
}

export interface LogoutActionI extends BaseActionI {}

export type ActionsType = LoginActionI | LogoutActionI;
