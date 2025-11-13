import React, { useContext, useEffect, useState } from "react";
import Loading from "../Components/Loading";
import CarNotFound from "./error/CarNotFound";
import { AuthContext } from "../proviedrs/AuthProvider";

const statuses = ["All", "available", "booked"];

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  console.log(bookings);

  // Fetch bookings from backend
  useEffect(() => {
    if (!email) return;

    const fetchBookings = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://rent-wheels-server-eosin.vercel.app/cars_booked`
        );
        if (!res.ok) throw new Error("Failed to fetch bookings");

        const data = await res.json();
        setBookings(Array.isArray(data) ? data : [data]);
      } catch (err) {
        console.error(err);
        setError("Failed to load bookings");
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [email]);

  if (loading) return <Loading />;
  if (error) return <CarNotFound error={error} />;

  // Filter bookings
  const filteredBookings = bookings
    .filter((b) =>
      selectedStatus === "All" ? true : b.status === selectedStatus
    )
    .filter((b) => b.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      {/* Title */}
      <div className="mb-6 gap-5 flex flex-col md:flex-row md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            My Bookings
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            All your booked cars in one place.
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search by car name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-auto px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* Status filter */}
      <div className="flex flex-wrap gap-3 mb-6">
        {statuses.map((status) => {
          const count =
            status === "All"
              ? bookings.length
              : bookings.filter((b) => b.status === status).length;

          return (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded font-medium ${
                selectedStatus === status
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {status} ({count})
            </button>
          );
        })}
      </div>

      {/* Table */}
      {filteredBookings.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 dark:text-gray-400">
            You haven't booked any cars yet.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                <th className="px-4 py-3 text-left">Car Name</th>
                <th className="px-4 py-3 text-left">Booking Date</th>
                <th className="px-4 py-3 text-left hidden md:block">Price</th>
                <th className="px-4 py-3 text-left ">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="px-4 py-3">{booking.name}</td>
                  <td className="px-4 py-3">
                    {new Date(booking.created_date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 hidden md:block">
                    ${booking.rent_per_day?.toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        booking.status === "booked"
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBooking;
