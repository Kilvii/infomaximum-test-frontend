import { Global } from "@emotion/react";
import { FC, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cars from "./pages/Cars/Cars";
import Favorities from "./pages/Cars/Favorities";
import { GLOBAL_STYLES } from "./styles/global.styles";

const App: FC = () => {

  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/cars" replace />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/favorities" element={<Favorities />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Global styles={GLOBAL_STYLES} />
    </div>
  );
};

export default App;
