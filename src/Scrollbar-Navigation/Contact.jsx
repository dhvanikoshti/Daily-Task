function Contact() {
  return (
    <section
      id="contact" className="scroll-mt-20 py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12 text-slate-800">
        Contact Us
      </h2>
      <form className="max-w-lg mx-auto bg-white p-10 rounded-2xl shadow-xl">
        <input type="text" placeholder="Your Name" className="w-full mb-6 p-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"/>
        <input type="email" placeholder="Your Email" className="w-full mb-6 p-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"/>
        <textarea placeholder="Your Message" row="4" className="w-full mb-6 p-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"></textarea>
        <button className="w-full bg-blue-900 text-white p-3 rounded-full font-semibold hover:bg-slate-900 transition duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
