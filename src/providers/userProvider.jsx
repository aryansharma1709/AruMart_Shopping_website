import { useState,useEffect } from "react";
import { UserContext } from "../Contexts";
import axios from 'axios';
import Loading from '../loader';

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: { Authorization: token },
        })
        .then((response) => {
          setUser(response.data);
          setLoadingUser(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setLoadingUser(false);
        });
    } else {
      setLoadingUser(false);
    }
  }, [token]);
  if (loadingUser) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <Loading />
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ isLoggedIn:!!token, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
