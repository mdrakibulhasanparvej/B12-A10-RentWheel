import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../proviedrs/AuthProvider";
import useTitle from "../hooks/useTitle";

const AddNewCar = () => {
  useTitle("Add-Car");
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const carData = {
      name: form.name.value,
      description: form.description.value,
      category: form.category.value,
      rent_per_day: parseFloat(form.rent_per_day.value),
      location: form.location.value,
      image_url: form.image_url.value,
      provider_name: user.displayName || "Unknown",
      provider_email: user.email,
      status: "available", // default when adding new car
      created_at: new Date(),
    };

    try {
      const res = await fetch(
        "https://rent-wheels-server-eosin.vercel.app/cars",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(carData),
        }
      );

      if (res.ok) {
        toast.success("✅ New car added successfully!");
        form.reset();
      } else {
        toast.error("❌ Failed to add car");
      }
    } catch (error) {
      toast.error("⚠️ Server error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Add New Car</h2>
        <p className="text-gray-500 text-sm">
          Fill out the form below to list a new car for rent.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Car Name */}
        <input
          type="text"
          name="name"
          placeholder="Car Name"
          className="input input-bordered w-full"
          required
        />

        {/* Rent Price */}
        <input
          type="number"
          name="rent_per_day"
          placeholder="Rent Price (Per Day)"
          className="input input-bordered w-full"
          required
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />

        {/* Category */}
        <select
          name="category"
          className="select select-bordered w-full"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Sports">Sports</option>
          <option value="Suv">Suv</option>
          <option value="Exotic">Exotic</option>
          <option value="Convertible">Convertible</option>
          <option value="Luxury">Luxury</option>
          <option value="Economy">Economy</option>
        </select>

        {/* Image URL */}
        <input
          type="text"
          name="image_url"
          placeholder="Hosted Image URL"
          className="input input-bordered w-full md:col-span-2"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Car Description"
          rows="4"
          className="textarea textarea-bordered w-full md:col-span-2"
          required
        ></textarea>

        {/* Provider Info (Read Only) */}
        <input
          type="text"
          value={user?.displayName || "Anonymous Provider"}
          className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          readOnly
        />
        <input
          type="email"
          value={user?.email || ""}
          className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          readOnly
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded mt-4 transition duration-200"
        >
          {loading ? "Adding..." : "Add Car"}
        </button>
      </form>
    </div>
  );
};

export default AddNewCar;
