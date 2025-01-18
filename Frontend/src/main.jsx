import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import KidsPage from "./pages/KidsPage";
import LayoutParent from "./components/Layout";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutParent />}>
          <Route path="/" element={<App />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/women/:id" element={<WomenPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/kids" element={<KidsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
