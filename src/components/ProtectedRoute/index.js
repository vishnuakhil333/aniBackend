import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedRoute(props) {
  const token = Cookies.get("token");
  console.log(token);
  if (token === undefined) {
    return <Redirect to="login" />;
  }
  console.log("Protected Route Triggered");
  return <Route {...props} />;
}
export default ProtectedRoute;
