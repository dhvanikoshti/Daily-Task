import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editPostId, setEditPostId] = useState(null);

  const POSTS_API = "https://amazing-big-spider.ngrok-free.app/posts";

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!token) window.location.href = "/login";
    if (storedUser) setUser(JSON.parse(storedUser));

    fetchPosts();
  }, []);

  // ✅ GET using axios
  const fetchPosts = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(POSTS_API, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      });
      setPosts(res.data);
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
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(posts.filter((p) => p.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ Formik Setup
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      image_file: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required ❌"),
      body: Yup.string().required("Body is required ❌"),
      image_file: Yup.mixed().required("Image is required ❌"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const token = localStorage.getItem("token");

      const formPayload = new FormData();
      formPayload.append("title", values.title);
      formPayload.append("content", values.body);
      formPayload.append("image", values.image_file);

      try {
        let res;

        if (editPostId) {
          res = await axios.put(`${POSTS_API}/${editPostId}`, formPayload, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setPosts(
            posts.map((p) => (p.id === editPostId ? res.data : p))
          );
        } else {
          res = await axios.post(POSTS_API, formPayload, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setPosts([res.data, ...posts]);
        }

        setShowModal(false);
        resetForm();
        setEditPostId(null);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleEdit = (post) => {
    formik.setValues({
      title: post.title,
      body: post.content,
      image_file: null,
    });
    setEditPostId(post.id);
    setShowModal(true);
  };

  const handleAdd = () => {
    formik.resetForm();
    setEditPostId(null);
    setShowModal(true);
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

      {/* Add Post */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div
          onClick={handleAdd}
          className="flex items-center justify-center cursor-pointer p-6 rounded-2xl shadow-lg bg-black text-white font-semibold mb-8"
        >
          + Add New Post
        </div>

        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-xl">
                {post.image_url && (
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-50 object-cover"
                  />
                )}
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {post.content}
                  </p>

                  {user &&
                    post.user &&
                    post.user.id === user.id && (
                      <div className="flex justify-end gap-2 mt-3">
                        <button
                          onClick={() => handleEdit(post)}
                          className="bg-blue-500 px-3 py-1 rounded text-white"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="bg-red-500 px-3 py-1 rounded text-white"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {editPostId ? "Edit Post" : "Add Post"}
            </h2>

            <form onSubmit={formik.handleSubmit} className="space-y-4">

              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                className="w-full p-3 rounded-xl bg-gray-800 text-white"
              />
              {formik.errors.title && formik.touched.title && (
                <div className="bg-red-100 text-red-800 p-2 rounded">
                  {formik.errors.title}
                </div>
              )}

              <textarea
                name="body"
                placeholder="Body"
                value={formik.values.body}
                onChange={formik.handleChange}
                className="w-full p-3 rounded-xl bg-gray-800 text-white"
              ></textarea>
              {formik.errors.body && formik.touched.body && (
                <div className="bg-red-100 text-red-800 p-2 rounded">
                  {formik.errors.body}
                </div>
              )}

              <input
                type="file"
                onChange={(e) =>
                  formik.setFieldValue(
                    "image_file",
                    e.currentTarget.files[0]
                  )
                }
                className="w-full p-3 rounded-xl bg-gray-800 text-white"
              />
              {formik.errors.image_file && (
                <div className="bg-red-100 text-red-800 p-2 rounded">
                  {formik.errors.image_file}
                </div>
              )}

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl bg-gray-700 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-purple-600 text-white"
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