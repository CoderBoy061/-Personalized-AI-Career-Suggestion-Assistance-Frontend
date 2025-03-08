import AllRoutes from "./AllRoutes";
import "./App.css";

function App() {
  const isAuthenticated = true;
  return (
    <>
      <AllRoutes isAuthenticated={isAuthenticated} />
    </>
  );
}

export default App;
