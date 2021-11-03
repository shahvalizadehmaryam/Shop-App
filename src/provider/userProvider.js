import { useContext, useReducer } from "react";
import { createContext } from "react/cjs/react.development";

const UserContext = createContext();
const UserContextDispatcher = createContext();
const Reducer = (state, action) => {
  switch (action.type) {
    case "GETUSERINFORMATION": {
      return {
        userData: action.payload,
      };
    }
  }
  return state;
};

const initialState = {
  userData: {},
};
const UserProvider = ({ children }) => {
  const [users, userDispatcher] = useReducer(Reducer, initialState);
  return (
    <>
      <>
        <UserContext.Provider value={users}>
          <UserContextDispatcher.Provider value={userDispatcher}>
            {children}
          </UserContextDispatcher.Provider>
        </UserContext.Provider>
      </>
    </>
  );
};

export default UserProvider;
export const useUser = () => useContext(UserContext);
export const useUserAction = () => useContext(UserContextDispatcher);
