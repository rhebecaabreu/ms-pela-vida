import React from "react";
import Routes from "routes";
import Header from "./components/organisms/Header";
import Footer from "components/organisms/Footer";
import GlobalStyleComposed from "styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyleComposed />
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
