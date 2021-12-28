import React, {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  useEffect,
} from "react";
import { defaultState } from "./state";
import { initializerOfState, reducer } from "./reducer";
import { ActionsType, Reducer, State } from "./storeTypes";

const StoreContext = createContext<{
  store: State;
  dispatch: Dispatch<ActionsType>;
}>({ store: defaultState, dispatch: () => null });

export const StoreProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [store, dispatch] = useReducer(
    reducer as Reducer,
    defaultState,
    initializerOfState
  );

  useEffect(() => {
    if (store.isLoggedIn) {
      localStorage.setItem("state", JSON.stringify(store));
    }
  }, [store]);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
