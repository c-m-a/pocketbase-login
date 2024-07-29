import { PocketProvider } from "~/context/PocketBase";
import { RequireAuth } from "~/components/RequireAuth";

function App() {
  return (
    <PocketProvider>
      <RequireAuth />
    </PocketProvider>
  );
}

export default App;
