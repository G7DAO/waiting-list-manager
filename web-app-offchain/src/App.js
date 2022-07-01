// Imports
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Middleware
import RequireAuth from "./middlewares/auth.js"

// Pages
import Home from "./pages/Home.js";
import Submit from "./pages/Submit.js";

// Theme
import { light } from "./constants/themes.js";

function App() {
  return (
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<RequireAuth><Submit /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
