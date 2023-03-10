import React from "react";
import { BrowserRouter } from "react-router-dom";
import routes, { renderRoutes } from "./router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "./content/Hero/hero";
import TopBar from "./content/TopBar/topbar";
import Footer from "./content/Footer";


const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {



  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div style={{ minHeight: '100vh', margin: 'auto', width: '100%', display: 'block', }}>
          <TopBar />
          <Hero />
          {renderRoutes(routes)}
          <div style={{ position: 'sticky', top: '100%' }}>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
