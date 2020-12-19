import { createReducerContext } from "react-use";

const initState = {
  julesokk: false,
  nisselue: false,
  snø: false,
};

type State = typeof initState;

type Action = keyof State;

function reducer(state: State, action: Action) {
  return {
    ...state,
    [action]: true,
  };
}

const [useContext, Provider] = createReducerContext(reducer, initState);

export const ProgressContextProvider = Provider;
export const useProgressContext = useContext;
