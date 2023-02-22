import React, { useEffect } from "react";
import * as authAction from "../../store/modules/auth/actions/AuthAction";
import { useStore } from "../../store/store";

export default function AuthButton() {
  const [{ auth }, dispatch] = useStore();
  const { isLoggedIn } = auth;

  const loginUser = () => {
    dispatch(authAction.loggedInOutUserAction(true));
  };

  const logoutUser = () => {
    dispatch(authAction.loggedInOutUserAction(false));
  };

  useEffect(() => {
    dispatch(authAction.getLoggedInAction());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn && (
        <div>
          Welcome ...
          <br />
          <span className="logout-button" onClick={logoutUser}>
            Logout
          </span>
        </div>
      )}

      {!isLoggedIn && <button onClick={loginUser}>Log Me in</button>}
    </>
  );
}
