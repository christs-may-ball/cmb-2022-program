import React from "react"
import { Route, Routes } from "react-router-dom"

import { ThemeProvider } from "@mui/material/styles"

import { Base, BottomBar } from "./components"
import { Home, PresidentsAddress } from "./pages"
import theme from "./theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Base>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presidents-address" element={<PresidentsAddress />} />
          </Routes>
          <BottomBar />
        </Base>
      </div>
    </ThemeProvider>
  );
};

export default App;
