import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const LoginPrivateRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.loginStatus ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default LoginPrivateRoute;