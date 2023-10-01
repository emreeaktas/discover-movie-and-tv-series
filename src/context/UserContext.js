import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUserToContext = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, setUser: setUserToContext }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider, useUser };
