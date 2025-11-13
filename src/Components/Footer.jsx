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
    <footer className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-5 border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            <img src="/logo.png" alt="RENT WHEEL" className="w-6 h-6 mr-2" />
            <h2 className="text-lg font-semibold">RENT WHEEL</h2>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-200 mb-4 text-justify">
            RentWheels is a Car Rent Online platform that connects users with
            local car owners or rental providers. Users can browse available
            cars, view details, and book rentals for specific dates. Car
            providers can list vehicles, manage bookings, and update
            availability
          </p>
          <div className="flex space-x-4 text-gray-600 dark:text-gray-200 text-lg">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-600 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* Address */}
        <div className="space-y-3 text-gray-600 dark:text-gray-200">
          <h3 className="font-semibold mb-3">Address</h3>
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-orange-500 mt-1" />
            <p className="text-sm">Upazila: Savar, District: Dhaka. </p>
          </div>
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-orange-500 mt-1" />
            <p className="text-sm">Upazila: Puthia, District: Rajshahi. </p>
          </div>
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-orange-500 mt-1" />
            <p className="text-sm">
              Upazila: Hathazari, District: Chittagong.{" "}
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-gray-600 dark:text-gray-200">
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
        <div className="text-gray-600 dark:text-gray-200">
          <h3 className="font-semibold mb-3">Useful links</h3>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-200">
            <li className="hover:text-orange-500 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Our Privacy Policy
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Our license
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Rental Prices
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Rental policy
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Refundable policy
            </li>
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
      <div className="text-center text-gray-600 dark:text-gray-200 text-sm mt-10 border-t pt-5">
        © Copyright RENT WHEEL {new Date().getFullYear()}. All Right Reserver By
        Rent Wheel
      </div>
    </footer>
  );
};

export default Footer;
