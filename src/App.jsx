import MainRoutes from "./routes/MainRoutes";
import "./index.css";
import Navigation from "./components/Navigation";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <div className="w-screen h-screen">
      <Navigation />
      <MainRoutes />
      <Analytics />
    </div>
  );
}

export default App;
