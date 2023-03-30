import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import WhatWeDo from "./components/WhatWeDo";
import OurWork from "./components/OurWork";
import OurPartners from "./components/OurPartners";
import Chat from "./components/Chat";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <WhatWeDo />
      <OurWork />
      <OurPartners />
      <Chat />
      <br />
      <Footer />
    </div>
  );
}

export default App;
