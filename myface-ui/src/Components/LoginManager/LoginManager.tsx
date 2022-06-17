import React, { createContext, ReactNode, useState } from "react";

interface LoginContextTypes {
  isLoggedIn: boolean;
  isAdmin: boolean;
  logIn: () => void;
  logOut: () => void;
  username: string;
  password: string;
  setUsername: (arg0: string) => void;
  setPassword: (arg0: string) => void;
}

export const LoginContext = createContext<LoginContextTypes>({
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
  const [loggedIn, setLoggedIn] = useState(false);
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
    setUsername: setUsername,
    setPassword: setPassword,
  };

  return (
    <LoginContext.Provider value={context}>
      {props.children}
    </LoginContext.Provider>
  );
}
