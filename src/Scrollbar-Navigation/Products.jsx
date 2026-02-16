function Products() {
    return (
        <section
            id="products" className="scroll-mt-20 py-24 px-6 text-center">
            <h2 className="text-4xl font-bold mb-16 text-slate-800">
                Our Featured Products
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <img src="https://m.media-amazon.com/images/I/81+vSj3rc5L._AC_UY327_FMwebp_QL65_.jpg" alt="Smart TV" className="w-full h-64 object-cover" />
                    <div className="p-6 text-left">
                        <h3 className="text-2xl font-semibold mb-3"> 4K Smart TV </h3>
                        <p className="text-slate-600 mb-4"> Ultra HD display with vibrant colors and immersive sound. </p>
                        <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-slate-900 transition"> View Details </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <img src="https://m.media-amazon.com/images/I/317EXekmAML._SX342_SY445_QL70_FMwebp_.jpg" alt="Air Conditioner" className="w-full h-64 object-cover" />
                    <div className="p-6 text-left">
                        <h3 className="text-2xl font-semibold mb-3"> Smart Air Conditioner </h3>
                        <p className="text-slate-600 mb-4"> Energy-efficient cooling with smart temperature control. </p>
                        <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-slate-900 transition"> View Details </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <img src="https://m.media-amazon.com/images/I/81+vSj3rc5L._AC_UY327_FMwebp_QL65_.jpg" alt="Smart TV" className="w-full h-64 object-cover" />
                    <div className="p-6 text-left">
                        <h3 className="text-2xl font-semibold mb-3">4K Smart TV</h3>
                        <p className="text-slate-600 mb-4"> Ultra HD display with vibrant colors and immersive sound. </p>
                        <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-slate-900 transition"> View Details </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <img src="https://m.media-amazon.com/images/I/317EXekmAML._SX342_SY445_QL70_FMwebp_.jpg" alt="Air Conditioner" className="w-full h-64 object-cover" />
                    <div className="p-6 text-left">
                        <h3 className="text-2xl font-semibold mb-3"> Smart Air Conditioner </h3>
                        <p className="text-slate-600 mb-4"> Energy-efficient cooling with smart temperature control. </p>
                        <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-slate-900 transition"> View Details </button>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Products;
