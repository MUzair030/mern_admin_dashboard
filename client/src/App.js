import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";

function App() {

  const mode = useSelector((state)=> state.theme.mode);
  const theme = useMemo()

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={ <Layout /> }>
                <Route path="/" element={ <Navigate to="/dashboard" replace /> } />
                <Route path="/dashboard" element={ <Dashboard/> } />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
