import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./Styles.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/index.jsx";
import ProjectPage from "./pages/Projects/index.jsx";
import AboutMePage from "./pages/AboutMe/index.jsx";
import HeaderComponent from "./components/HeaderComponent/index.jsx";
import { GlobalProvider } from "./pages/GlobalVariables/GlobalLanguage.jsx";

//Mongo api:
//const uri = "mongodb+srv://Lorenzo:Piquinin.1@cluster0.aic8y5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/about_me" element={<AboutMePage />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  </StrictMode>
);
