import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const navigate = useNavigate();
  const API = "https://amazing-big-spider.ngrok-free.app/login";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const res = await axios.post(API,formData, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(formData),
        // params: formData,
      });

      // const data = await res.json();

      if (res.status===200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setMessage({ text: "Login Successful ✅ Redirecting...", type: "success" });

        // Redirect after 1.5 seconds
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        setMessage({ text: data.error || "Invalid credentials ❌", type: "error" });
      }
    } catch (error) {
      console.log(error);
      setMessage({ text: "Server error ❌", type: "error" });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4 sm:mb-6 tracking-wide">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
          Login to your account to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 sm:px-5 sm:py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 sm:px-5 sm:py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 sm:py-3 rounded-xl font-semibold text-white text-lg transition ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Message */}
        {message.text && (
          <div
            className={`mt-6 p-3 rounded-lg text-center font-medium text-sm sm:text-base ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-gray-400 mt-6 sm:mt-8 text-sm sm:text-base">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-indigo-500 hover:text-purple-500 underline transition"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
