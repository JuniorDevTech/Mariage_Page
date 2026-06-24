import { useState } from "react";

import AppRoutes from "./routes/AppRoutes";

import SplashScreen from "./components/splash/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return <AppRoutes />;
}

export default App;
