import { defaultState } from "./state";
import { actionsTypes } from "./actions";
import { ActionsType, LoginActionI, State } from "./storeTypes";

export const initializerOfState = (initialValue: State = defaultState) =>
  JSON.parse(<string>localStorage.getItem("state")) || initialValue;

export const reducer = (state: State = defaultState, action: ActionsType) => {
  switch (action.type) {
    case actionsTypes.login: {
      localStorage.setItem("token", "123tEstToken123");
      const {
        payload: { email },
      } = action as LoginActionI;
      return {
        ...state,
        isLoggedIn: true,
        name: "John Snow",
        email,
      };
    }
    case actionsTypes.logout: {
      localStorage.clear();
      return { ...state, isLoggedIn: false };
    }
    default:
      return state;
  }
};
