function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ElectroMart</h1>

        <div className="space-x-12 font-medium">
          <a href="#home" className="hover:text-slate-300 transition duration-300">Home</a>
          <a href="#products" className="hover:text-slate-300 transition duration-300">Products</a>
          <a href="#about" className="hover:text-slate-300 transition duration-300">About</a>
          <a href="#contact" className="hover:text-slate-300 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
