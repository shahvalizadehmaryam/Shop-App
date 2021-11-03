import { useContext } from "react";
import { createContext } from "react/cjs/react.development";

const UserContext = createContext();
const UserContextDispatcher = createContext();
const Reducer = (state, action) => {
  switch (action.type) {
  }
  return state;
};

const initialState = {
  userList: [],
};
const UserProvider = () => {
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
