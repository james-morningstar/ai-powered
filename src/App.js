import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { NavBar, Feed, About } from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <Box
        sx={{
          background: "rgb(8, 31, 80)",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
