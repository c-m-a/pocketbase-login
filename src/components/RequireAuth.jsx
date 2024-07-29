import { usePocket } from "~/context/PocketBase";
import Login from "./Login";
import Home from "./Home";

export const RequireAuth = () => {
  const { user } = usePocket();

  return user ? <Home /> : <Login />;
};
