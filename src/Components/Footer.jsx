import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            <img src="/logo.png" alt="RENT WHEEL" className="w-6 h-6 mr-2" />
            <h2 className="text-lg font-semibold">RENT WHEEL</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis
            massa a id iaculis lorem.
          </p>
          <div className="flex space-x-4 text-gray-600 text-lg">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-600 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold mb-3">Address</h3>
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-orange-500 mt-1" />
            <p className="text-sm">A-79, Savar , Dhaka-1340 </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <div className="flex items-start space-x-3 mb-2">
            <FaEnvelope className="text-orange-500 mt-1" />
            <p className="text-sm">mdrakibulhasan@gmail.com</p>
          </div>
          <div className="flex items-start space-x-3">
            <FaPhoneAlt className="text-orange-500 mt-1" />
            <p className="text-sm">+880 12345 67890</p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3">Useful links</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li className="hover:text-orange-500 cursor-pointer">About us</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact us</li>
            <li className="hover:text-orange-500 cursor-pointer">Gallery</li>
            <li className="hover:text-orange-500 cursor-pointer">Blog</li>
            <li className="hover:text-orange-500 cursor-pointer">F.A.Q</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="font-semibold mb-3">Download App</h3>
          <div className="space-y-3">
            <img
              src="/apple_app_store.png"
              alt="App Store"
              className="w-50 cursor-pointer hover:opacity-80"
            />
            <img
              src="/Google_Play.png"
              alt="Google Play"
              className="w-50 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t pt-5">
        © Copyright RENT WHEEL {new Date().getFullYear()}. All Right Reserver By
        Rent Wheel
      </div>
    </footer>
  );
};

export default Footer;
