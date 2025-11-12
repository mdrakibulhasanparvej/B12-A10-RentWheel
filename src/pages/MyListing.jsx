import React, { useContext, useEffect, useState } from "react";
import Loading from "../Components/Loading";
import { AuthContext } from "../proviedrs/AuthProvider";
import CarNotFound from "./error/CarNotFound";

const categories = [
  "All",
  "sports",
  "suv",
  "exotic",
  "convertible",
  "Luxury",
  "Economy",
];

const MyListing = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch bookings from backend
  useEffect(() => {
    if (!email) return;

    const fetchBookings = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/myCars?email=${email}`);
        if (!res.ok) throw new Error("User not found");

        const data = await res.json();
        setBookings(Array.isArray(data) ? data : [data]);
      } catch (err) {
        console.error(err);
        setError("Failed to load data");
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [email]);

  if (loading) return <Loading />;
  if (error) return <CarNotFound error={error} />;

  // Filter bookings by category and search term
  const filteredBookings = bookings
    .filter((booking) =>
      selectedCategory === "All" ? true : booking.category === selectedCategory
    )
    .filter((booking) =>
      booking.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      {/* Title Section */}
      <div className="mb-6 flex justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            My List
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            All listed cars in one place.
          </p>
        </div>
        <div>
          {/* Live Search Input */}
          <input
            type="text"
            placeholder="Search by car name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-auto px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-6 items-center">
        {categories.map((category) => {
          const count =
            category === "All"
              ? bookings.length
              : bookings.filter((b) => b.category === category).length;

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded font-medium ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      {/* Table */}
      {filteredBookings.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 dark:text-gray-400">
            You haven't listed any cars yet!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                <th className="px-4 py-3 text-left">Car Name</th>
                <th className="px-4 py-3 text-left">Rent Price</th>
                <th className="px-4 py-3 text-left">Booking Date</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Update</th>
                <th className="px-4 py-3 text-left">Delete</th>
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
                    ${booking.rent_per_day?.toLocaleString()}
                  </td>
                  <td className="px-4 py-3">{booking.booking_date || "N/A"}</td>
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
                  <td className="px-4 py-3">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                      Update
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                      Delete
                    </button>
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

export default MyListing;
