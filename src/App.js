import React from "react"
import "./style.css"
import Blog from './pages/Blog';
import Footer from "./components/Footer";

import axios from "axios";
import Pages from "./pages/Pages/Pages";
import Contacts from "./pages/Contacts";
function App() {

  return (
    <>
      <Blog />
      <Footer />
      <Pages />
      <Contacts/>
    </>
  );
}

export default App;