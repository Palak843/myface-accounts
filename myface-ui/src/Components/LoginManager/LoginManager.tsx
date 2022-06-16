import React, { createContext, ReactNode, useState } from "react";

export const LoginContext = createContext({
  isLoggedIn: false,
  isAdmin: false,
  logIn: () => {},
  logOut: () => {},
  username: "",
  password: "",
  setUsername: () => {},
  setPassword: () => {},
});

interface LoginManagerProps {
  children: ReactNode;
}

export function LoginManager(props: LoginManagerProps): JSX.Element {
  const [loggedIn, setLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function logIn() {
    setLoggedIn(true);
  }

  function logOut() {
    setLoggedIn(false);
  }

  const context = {
    isLoggedIn: loggedIn,
    isAdmin: loggedIn,
    logIn: logIn,
    logOut: logOut,
    username: username,
    password: password,
    setUsername: () => {},
    setPassword: () => {},
  };

  return (
    <LoginContext.Provider value={context}>
      {props.children}
    </LoginContext.Provider>
  );
}
