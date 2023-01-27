import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type Dispatch,
} from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("hackathon") || "{}"),
  loading: false,
  error: null,
  dispatch: (() => undefined) as Dispatch<any>,
};
export const AuthContext = createContext(INITIAL_STATE);

function AuthReducer(state: any, action: any) {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
}
type Props = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("hackathon", JSON.stringify(state.user));
  }, [state.user]);

  const value = useMemo(
    () => ({
      user: state.user,
      loading: state.loading,
      error: state.error,
      dispatch,
    }),
    [state.user, state.loading, state.error, dispatch]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
