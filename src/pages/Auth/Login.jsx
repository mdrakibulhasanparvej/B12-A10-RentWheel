import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../proviedrs/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";

const Login = () => {
  const { login, googlelogin, setUser, checkExistingUser } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and password are required.", {
        position: "top-right",
        autoClose: 1000,
        theme: "colored",
      });
      return;
    }

    checkExistingUser(email)
      .then((methods) => {
        if (!methods.length === 0) {
          toast.error("No user found with this email.", {
            position: "top-right",
            autoClose: 1000,
            theme: "colored",
          });
          return;
        }
      })
      .catch((error) =>
        toast.error("Error checking user existence: " + error.message, {
          position: "top-right",
          autoClose: 1000,
          theme: "colored",
        })
      );

    login(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("🎉 Log in successful!", {
          position: "top-right",
          autoClose: 1000,
          theme: "colored",
        });
      })
      .catch((error) =>
        toast.error(handleFirebaseError(error.code), {
          position: "top-right",
          autoClose: 1000,
          theme: "colored",
        })
      );
  };

  const handleFirebaseError = (errorCode) => {
    const messages = {
      "auth/invalid-credential": "Invalid email or password.",
      "auth/user-not-found": "No user found with this email.",
      "auth/wrong-password": "The password is incorrect.",
      "auth/too-many-requests":
        "Too many failed attempts. Please try again later.",
    };
    return messages[errorCode] || "Something went wrong. Please try again.";
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
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
          {/* <div className="mt-2 text-xs text-left space-y-1">
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
          </div> */}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300"
          >
            Login
          </button>
          <button
            onClick={handlegooglelogin}
            className="w-full flex items-center justify-center gap-3 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300"
          >
            <FaGoogle /> Continue with google
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Don't have an account?{" "}
          <Link
            to="/auth/Signup"
            className="text-orange-500 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;

// import AuthCard from "./AuthCard";
// import { motion } from "framer-motion";

// const Login = ({ switchPage }) => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-500 p-4">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 bg-white/10 backdrop-blur-md p-4 rounded-2xl"
//       >
//         <div className="flex flex-col justify-center text-white px-8">
//           <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
//           <p className="text-lg opacity-90">
//             Sign in to your EasyPay account and continue where you left off.
//           </p>
//         </div>

//         <AuthCard
//           title="Login to your account"
//           fields={[
//             { name: "email", type: "email", placeholder: "Enter your mail" },
//             {
//               name: "password",
//               type: "password",
//               placeholder: "Enter your password",
//             },
//           ]}
//           buttonText="Sign In"
//           linkText="Don't have an account?"
//           linkAction={switchPage}
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default Login;
