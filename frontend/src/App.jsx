import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import SplashScreen from "./components/splash/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AppRoutes />

      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
    </>
  );
}

export default App;
