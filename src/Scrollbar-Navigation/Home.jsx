function Home() {
    return (
        <section
            id="home" className="scroll-mt-20 h-screen flex flex-col justify-center items-center text-center px-6 bg-slate-800 text-white">
            <h1 className="text-6xl font-extrabold mb-6">
                Upgrade Your Home Experience
            </h1>
            <p className="text-lg mb-8 max-w-xl text-slate-300">
                Discover premium Smart TVs and Air Conditioners with advanced technology.
            </p>
            <a href="#products" className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-900 transition duration-300">
                Explore Products
            </a>
        </section>
    );
}

export default Home;
