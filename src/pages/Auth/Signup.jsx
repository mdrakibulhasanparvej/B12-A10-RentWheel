import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../proviedrs/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { toast } from "react-toastify";

const Signup = () => {
  const { createUser, googlelogin, updateUser, setUser, logout } =
    useContext(AuthContext);
  const [name, setName] = useState("");
  const [photourl, setPhotourl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlegooglelogin = () => {
    googlelogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Log in successful!", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
      })
      .catch((error) => toast.error(error.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photourl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photourl });
            logout();
            navigate("/auth/login");
          })
          .catch((error) =>
            toast.error(error.message, {
              position: "top-right",
              autoClose: 1000,
              theme: "colored",
            })
          );
      })
      .catch((error) =>
        toast.error(error.message, {
          position: "top-right",
          autoClose: 1000,
          theme: "colored",
        })
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-400 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Photo URL
            </label>
            <input
              type="text"
              onChange={(e) => setPhotourl(e.target.value)}
              placeholder="Enter your photo url"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-11 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {/* password validation */}
          <div className="mt-2 text-xs text-left space-y-1">
            <p
              className={
                /[A-Z]/.test(password) ? "text-green-500" : "text-red-500"
              }
            >
              • At least one uppercase letter
            </p>
            <p
              className={
                /[a-z]/.test(password) ? "text-green-500" : "text-red-500"
              }
            >
              • At least one lowercase letter
            </p>
            <p
              className={
                /[!@#$%^&*]/.test(password) ? "text-green-500" : "text-red-500"
              }
            >
              • At least one special character (!@#$%^&*)
            </p>
            <p
              className={
                /\d/.test(password) ? "text-green-500" : "text-red-500"
              }
            >
              • At least one number (0-9)
            </p>
            <p
              className={
                password.length >= 6 ? "text-green-500" : "text-red-500"
              }
            >
              • Minimum 6 characters
            </p>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full bg-linear-to-r from-orange-400 to-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300"
          >
            Register
          </button>
        </form>
        <button
          onClick={handlegooglelogin}
          className="cursor-pointer w-full mt-5 flex items-center justify-center gap-3 bg-linear-to-r from-orange-400 to-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300"
        >
          <FaGoogle /> Continue with google
        </button>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-orange-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
