import React from "react"
import "./style.css"
import Blog from './pages/Blog';
import Footer from "./components/Footer";

import axios from "axios";
import Pages from "./pages/Pages/Pages";

function App() {

  return (
    <>
      <Blog />
      <Footer />
      <Pages />
    </>
  );
}

export default App;
