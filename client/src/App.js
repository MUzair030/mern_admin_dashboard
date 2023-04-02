import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import {ThemeProvider, CssBaseline, createTheme} from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import {Layout} from "./components";
import {Dashboard} from "./pages";
import {themeSettings} from "./theme";


function App() {

  const mode = useSelector((state)=> state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={ <Layout /> }>
                <Route path="/" element={ <Navigate to="/" replace={true} /> } />
                <Route path="/dashboard" element={ <Dashboard/> } />
            </Route>
              {/*<Route path="/dashboard" element={ <Dashboard/> } />*/}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
