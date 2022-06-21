import React from "react"
import { Route, Routes } from "react-router-dom"

import { ThemeProvider } from "@mui/material/styles"

import { Base, BottomBar } from "./components"
import {
  Buttery,
  CarPark,
  Chapel,
  EntsFull,
  FellowsGarden,
  FirstCourt,
  FoodFull,
  FormalHall,
  Home,
  LloydRoom,
  MulberryTree,
  Ocr,
  PortraitRoom,
  PresidentsAddress,
  SecondCourt,
  ThirdCourt
} from "./pages"
import theme from "./theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Base>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presidents-address" element={<PresidentsAddress />} />
            <Route path="/first-court" element={<FirstCourt />} />
            <Route path="/second-court" element={<SecondCourt />} />
            <Route path="/third-court" element={<ThirdCourt />} />
            <Route path="/portrait-room" element={<PortraitRoom />} />
            <Route path="/mulberry-tree" element={<MulberryTree />} />
            <Route path="/fellows-garden" element={<FellowsGarden />} />
            <Route path="/lloyd-room" element={<LloydRoom />} />
            <Route path="/chapel" element={<Chapel />} />
            <Route path="/buttery" element={<Buttery />} />
            <Route path="/carpark" element={<CarPark />} />
            <Route path="/formal-hall" element={<FormalHall />} />
            <Route path="/ocr" element={<Ocr />} />
            <Route path="/ents" element={<EntsFull />} />
            <Route path="/food-and-drinks" element={<FoodFull />} />
          </Routes>
          <BottomBar />
        </Base>
      </div>
    </ThemeProvider>
  );
};

export default App;
