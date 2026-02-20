import axios from "axios";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ title: "", body: "", image_file: null });
  const [editPostId, setEditPostId] = useState(null);

  const POSTS_API = "https://amazing-big-spider.ngrok-free.app/posts";

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/login";
    if (storedUser) setUser(JSON.parse(storedUser));
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(POSTS_API, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      });
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`${POSTS_API}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(posts.filter((p) => p.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (post) => {
    setFormData({ title: post.title, body: post.body, image_file: null });
    setEditPostId(post.id);
    setShowModal(true);
  };

  const handleAdd = () => {
    setFormData({ title: "", body: "", image_file: null });
    setEditPostId(null);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formPayload = new FormData();
    formPayload.append("title", formData.title);
    formPayload.append("content", formData.body);
    if (formData.image_file) formPayload.append("image", formData.image_file);

    const method = editPostId ? "PUT" : "POST";
    const url = editPostId ? `${POSTS_API}/${editPostId}` : POSTS_API;

    try {
      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: formPayload,
      });
      const data = await res.json();

      if (editPostId) {
        setPosts(posts.map((p) => (p.id === editPostId ? data : p)));
      } else {
        setPosts([data, ...posts]);
      }

      setShowModal(false);
      setFormData({ title: "", body: "", image_file: null });
      setEditPostId(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-4 bg-gray-900 shadow-xl sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-3 sm:mb-0">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
            D
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">Dashboard</h1>
        </div>

        {/* User & Logout */}
        <div className="flex items-center gap-3 sm:gap-6">
          {user && (
            <div className="flex items-center gap-2 sm:gap-3 bg-gray-800 px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-md hover:bg-gray-700 transition cursor-default">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-500 flex items-center justify-center text-white font-medium">
                {user.name[0].toUpperCase()}
              </div>
              <span className="text-white font-semibold text-sm sm:text-base">{user.name}</span>
            </div>
          )}

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-3 sm:px-5 py-1 sm:py-2 rounded-2xl text-white font-semibold shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
          >
            Logout
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Add Post Card */}
      <div className="max-w-full sm:max-w-7xl mx-auto px-4 sm:px-6 mt-6">
        <div
          onClick={handleAdd}
          className="flex items-center justify-center cursor-pointer p-4 sm:p-6 rounded-2xl shadow-lg bg-gradient-to-r from-black via-gray-900 to-gray-800 hover:shadow-purple-500/50 transition transform hover:-translate-y-1 mb-6 sm:mb-8 text-white font-semibold text-base sm:text-lg"
        >
          + Add New Post
        </div>

        {loading ? (
          <p className="text-gray-500">Loading posts...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-400/40 transition transform hover:-translate-y-1">
                {post.image_url && (
                  <div className="relative h-50 overflow-hidden">
                    <img src={post.image_url} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                )}
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{post.body}</p>

                  <div>
                    <h4 className="flex justify-between mt-3 text-gray-800 text-sm sm:text-sm">{post.content}</h4>
                  </div>
                  <div className="flex justify-between mt-3 text-gray-500 text-xs sm:text-sm">
                    {/* <span>Admin</span> */}
                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>


                  {/* Edit/Delete Buttons */}
                  <div className="flex justify-end gap-2 mt-3">

                    {/* <button
                      onClick={() => handleEdit(post)}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-xl text-white font-medium shadow-md transition transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-3 sm:px-4 py-1 sm:py-2 rounded-xl text-white font-medium shadow-md transition transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
                    >
                      Delete
                    </button> */}
                    {user && post.user && post.user.id === user.id && (
                      <div className="flex justify-end gap-2 mt-3">
                        <button
                          onClick={() => handleEdit(post)}
                          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-xl text-white font-medium shadow-md transition transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(post.id)}
                          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-3 sm:px-4 py-1 sm:py-2 rounded-xl text-white font-medium shadow-md transition transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl w-full max-w-full sm:max-w-md shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-white">{editPostId ? "Edit Post" : "Add Post"}</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-3 rounded-xl bg-gray-800 text-white outline-none"
                required
              />
              <textarea
                placeholder="Body"
                value={formData.body}
                onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                className="w-full p-3 rounded-xl bg-gray-800 text-white outline-none"
                required
              ></textarea>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, image_file: e.target.files[0] })}
                className="w-full p-3 rounded-xl bg-gray-800 text-white outline-none"
              />
              <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-semibold shadow-md transition transform hover:-translate-y-1 hover:scale-105"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
                >
                  {editPostId ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
