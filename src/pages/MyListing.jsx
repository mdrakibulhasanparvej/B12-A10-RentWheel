import React, { useContext, useEffect, useState } from "react";
import Loading from "../Components/Loading";
import { AuthContext } from "../proviedrs/AuthProvider";
import CarNotFound from "./error/CarNotFound";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

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
  useTitle("My-Listing");
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    rent_per_day: "",
    location: "",
    category: "",
    image_url: "",
    description: "",
  });

  useEffect(() => {
    if (!email) return;
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://rent-wheels-server-eosin.vercel.app/myCars?email=${email}`
        );
        if (!res.ok) throw new Error("Failed to load listings");
        const data = await res.json();
        setBookings(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Failed to load data",{err});
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [email]);

  const openUpdateModal = (car) => {
    setSelectedCar(car);
    setFormData({
      name: car.name,
      rent_per_day: car.rent_per_day,
      location: car.location,
      category: car.category,
      image_url: car.image_url,
      description: car.description,
    });
    document.getElementById("update_modal").showModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

    const updatedCar = {
      ...formData,
      provider_name: user?.displayName || "Anonymous Provider",
      email: user?.email,
    };

    try {
      const res = await fetch(
        `https://rent-wheels-server-eosin.vercel.app/cars/${selectedCar._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedCar),
        }
      );
      if (!res.ok) throw new Error("Failed to update car");

      toast.success("Car updated successfully!");
      document.getElementById("update_modal").close();

      setBookings((prev) =>
        prev.map((car) =>
          car._id.toString() === selectedCar._id.toString()
            ? { ...car, ...updatedCar }
            : car
        )
      );
    } catch (err) {
      toast.error("Update failed",{err});
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(
            `https://rent-wheels-server-eosin.vercel.app/cars/${id}`,
            { method: "DELETE" }
          );
          if (!res.ok) throw new Error("Failed to delete car");
          setBookings((prev) =>
            prev.filter((car) => car._id.toString() !== id.toString())
          );
          Swal.fire("Deleted!", "Your car has been deleted.", "success");
        } catch (err) {
          Swal.fire("Error!", "Something went wrong while deleting.", {err});
        }
      }
    });
  };

  if (loading) return <Loading />;
  if (error) return <CarNotFound error={error} />;

  const filteredBookings = bookings
    .filter((b) =>
      selectedCategory === "All" ? true : b.category === selectedCategory
    )
    .filter((b) => b.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 text-gray-800 dark:text-white">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
            My Listings
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            Manage your listed cars below.
          </p>
        </div>
        <input
          type="text"
          placeholder="Search by car name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ml-auto px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 w-full sm:w-auto"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 items-center">
        {categories.map((cat) => {
          const count =
            cat === "All"
              ? bookings.length
              : bookings.filter((b) => b.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 cursor-pointer sm:px-4 sm:py-2 rounded font-medium text-sm sm:text-base ${
                selectedCategory === cat
                  ? "bg-linear-to-r from-orange-400 to-orange-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Table */}
      {filteredBookings.length === 0 ? (
        <div className="flex justify-center items-center h-48 sm:h-64">
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            You haven't listed any cars yet!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm sm:text-base">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                <th className="px-3 sm:px-4 py-2 text-left">Car Name</th>
                <th className="px-3 sm:px-4 py-2 text-left">Rent Price</th>
                <th className="px-3 sm:px-4 py-2 text-left">Category</th>
                <th className="px-3 sm:px-4 py-2 text-left">Status</th>
                <th className="px-3 sm:px-4 py-2 text-left">Update</th>
                <th className="px-3 sm:px-4 py-2 text-left">Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((car) => (
                <tr
                  key={car._id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="px-3 sm:px-4 py-2">{car.name}</td>
                  <td className="px-3 sm:px-4 py-2">${car.rent_per_day}</td>
                  <td className="px-3 sm:px-4 py-2">{car.category}</td>
                  <td className="px-3 sm:px-4 py-2">
                    {car.status === "booked" ? (
                      <span className="bg-red-100 text-red-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                        Booked
                      </span>
                    ) : (
                      <span className="bg-green-100 text-green-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                        Available
                      </span>
                    )}
                  </td>
                  <td className="px-3 sm:px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm"
                      onClick={() => openUpdateModal(car)}
                    >
                      Update
                    </button>
                  </td>
                  <td className="px-3 sm:px-4 py-2">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm"
                      onClick={() => handleDelete(car._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Update Modal */}
      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-full sm:max-w-3xl text-gray-800 dark:text-white bg-white dark:bg-gray-800">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-2 text-gray-800 dark:text-white">
            Update Car
          </h2>
          <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base text-center mb-6">
            Modify your car listing details below.
          </p>

          {selectedCar && (
            <form
              onSubmit={handleUpdateSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-800 dark:text-white"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input text-gray-900 dark:text-white bg-white dark:bg-gray-900 input-bordered w-full"
                required
              />
              <input
                type="number"
                name="rent_per_day"
                value={formData.rent_per_day}
                onChange={handleChange}
                className="input text-gray-800 dark:text-white bg-white dark:bg-gray-900   input-bordered w-full"
                required
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="input text-gray-800 dark:text-white bg-white dark:bg-gray-900   input-bordered w-full"
                required
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="select text-gray-800 dark:text-white bg-white dark:bg-gray-900  select-bordered w-full"
                required
              >
                <option value="sports">Sports</option>
                <option value="suv">SUV</option>
                <option value="exotic">Exotic</option>
                <option value="convertible">Convertible</option>
                <option value="Luxury">Luxury</option>
                <option value="Economy">Economy</option>
              </select>
              <input
                type="text"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="input text-gray-800 dark:text-white bg-white dark:bg-gray-900  input-bordered w-full sm:col-span-2"
                required
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="textarea text-gray-800 dark:text-white bg-white dark:bg-gray-900  textarea-bordered w-full sm:col-span-2"
                required
              ></textarea>
              <button
                type="submit"
                disabled={isUpdating}
                className="sm:col-span-2 bg-linear-to-r from-orange-400 to-orange-600 hover:bg-orange-600 text-white font-semibold py-2 rounded mt-4"
              >
                {isUpdating ? "Updating..." : "Update Car"}
              </button>
            </form>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyListing;
