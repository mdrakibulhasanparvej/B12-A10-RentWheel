import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../proviedrs/AuthProvider";
import { motion } from "framer-motion";
import { FaCar, FaClipboardList, FaUserAlt } from "react-icons/fa";
import Loading from "../Components/Loading";

const OverView = () => {
  const [totalCars, setTotalCars] = useState([]);
  const [totalBookingCars, setTotalBookingCars] = useState([]);
  const [totalMyCars, setTotalMyCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const email = user?.email;

  // Fetch all cars
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setTotalCars(data || []))
      .catch((err) => console.error(err));
  }, [loading]);

  // Fetch all booked cars
  useEffect(() => {
    fetch("http://localhost:5000/cars_booked")
      .then((res) => res.json())
      .then((data) => setTotalBookingCars(data || []))
      .catch((err) => console.error(err));
  }, [loading]);

  // Fetch user's own cars
  useEffect(() => {
    if (!email) return;
    const fetchMyCars = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/myCars?email=${email}`);
        const data = await res.json();
        setTotalMyCars(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMyCars();
  }, [email]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {/* Total Cars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 border border-gray-200 rounded-2xl dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm flex flex-col"
          >
            <h3 className="text-2xl font-semibold  mb-3">Total Cars</h3>
            <p className="text-4xl font-bold mt-2 flex items-center gap-3">
              <span>
                <FaCar />
              </span>{" "}
              {totalCars.length}
            </p>
          </motion.div>

          {/* Total Bookings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 border border-gray-200 rounded-2xl dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-3">Total Bookings</h3>
            <p className="text-4xl font-bold mt-2 flex items-center gap-3">
              <span>
                <FaClipboardList />
              </span>{" "}
              {totalBookingCars.length}
            </p>
          </motion.div>

          {/* My Cars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 border border-gray-200 rounded-2xl dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-3">My Cars</h3>
            <p className="text-4xl font-bold mt-2 flex items-center gap-3">
              <span>
                <FaUserAlt />
              </span>{" "}
              {totalMyCars.length}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OverView;
