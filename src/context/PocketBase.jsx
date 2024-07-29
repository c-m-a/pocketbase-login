import {
  useEffect,
  useState,
  createContext,
  useMemo,
  useCallback,
  useContext,
} from "react";
import PocketBase from "pocketbase";

const PocketContext = createContext({});

export const PocketProvider = ({ children }) => {
  const pb = useMemo(() => new PocketBase(import.meta.env.VITE_BACKEND_URL));

  const [user, setUser] = useState(pb.authStore.model);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = pb.authStore.onChange((model) => setUser(model));
    return () => unsubscribe();
  }, [user]);

  const signUp = useCallback(
    async (email, password) => {
      try {
        await pb
          .collection("users")
          .create({ email, password, confirmPassword: password });
      } catch (e) {
        console.error("Sign up error:", e);
        setError(e.message || "Sign up failed");
      }
    },
    [pb],
  );

  const login = useCallback(
    async (email, password) => {
      try {
        await pb.collection("users").authWithPassword(email, password);
      } catch (e) {
        console.error("Login error:", e);
        setError(e.message || "Login failed");
      }
    },
    [pb],
  );

  const logout = useCallback(() => {
    pb.authStore.clear();
    setUser(null);
  }, [pb]);

  return (
    <PocketContext.Provider value={{ signUp, login, logout, user, pb, error }}>
      {children}
    </PocketContext.Provider>
  );
};

export const usePocket = () => useContext(PocketContext);
