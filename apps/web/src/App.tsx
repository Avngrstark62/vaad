import AuthProvider from "./components/AuthProvider";
import Home from "./components/Home";

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
