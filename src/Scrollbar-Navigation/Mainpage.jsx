import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";

function Mainpage() {
  return (
    <div className="font-sans scroll-smooth bg-slate-100 text-slate-900">

      <Navbar />
        <Home />
        <Products />
        <About />
        <Contact />

      <footer className="bg-slate-900 text-white text-center py-6">
        © 2026 ElectroMart. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Mainpage;
