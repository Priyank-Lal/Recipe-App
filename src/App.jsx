import MainRoutes from "./routes/MainRoutes";
import "./index.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="w-screen h-screen">
      <Navigation />
      <MainRoutes />
    </div>
  );
}

export default App;
