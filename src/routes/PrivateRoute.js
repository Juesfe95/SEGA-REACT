import React from "react";
import { Redirect, Route } from "react-router-dom";
import { HOME } from "../Constant";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        sessionStorage.getItem("USER_TOKEN") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: HOME,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
