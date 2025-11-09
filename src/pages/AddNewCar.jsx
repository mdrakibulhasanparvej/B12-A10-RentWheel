import React, { useState } from "react";
import { toast } from "react-toastify";

const AddNewCar = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const carData = {
      name: form.name.value,
      image_url: form.image_url.value,
      deposit: form.deposit.value,
      mileage_limit: form.mileage_limit.value,
      extra_mileage: form.extra_mileage.value,
      payment: form.payment.value,
      color: form.color.value,
      transmission: form.transmission.value,
      car_type: form.car_type.value,
      engine: form.engine.value,
      seats: parseInt(form.seats.value),
      doors: parseInt(form.doors.value),
      zero_to_hundred: form.zero_to_hundred.value,
      drive: form.drive.value,
      fuel: form.fuel.value,
      luggage: form.luggage.value,
      daily: form.daily.value,
      weekly: form.weekly.value,
      monthly: form.monthly.value,
      booking_status: form.booking_status.value,
      category: form.category.value,
      brand: form.brand.value,
      model: form.model.value,
      rating: parseFloat(form.rating.value),
      created_at: new Date().toLocaleDateString("en-GB"),
      created_by: "mdrakibulhasanparvej@gmail.com",
      downloaded: 0,
      note: "Prices are Inclusive of Vat & Deposit Fee",
    };

    try {
      const res = await fetch("http://localhost:5000/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carData),
      });

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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Add New Car
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Car Name" className="input input-bordered w-full" required />
        <input type="text" name="image_url" placeholder="Image URL" className="input input-bordered w-full" required />
        <input type="text" name="deposit" placeholder="Deposit" className="input input-bordered w-full" required />
        <input type="text" name="mileage_limit" placeholder="Mileage Limit" className="input input-bordered w-full" required />
        <input type="text" name="extra_mileage" placeholder="Extra Mileage" className="input input-bordered w-full" />
        <input type="text" name="payment" placeholder="Payment Options" className="input input-bordered w-full" />
        <input type="text" name="color" placeholder="Color" className="input input-bordered w-full" />
        <input type="text" name="transmission" placeholder="Transmission" className="input input-bordered w-full" />
        <input type="text" name="car_type" placeholder="Car Type" className="input input-bordered w-full" />
        <input type="text" name="engine" placeholder="Engine" className="input input-bordered w-full" />
        <input type="number" name="seats" placeholder="Seats" className="input input-bordered w-full" />
        <input type="number" name="doors" placeholder="Doors" className="input input-bordered w-full" />
        <input type="text" name="zero_to_hundred" placeholder="0-100 Time" className="input input-bordered w-full" />
        <input type="text" name="drive" placeholder="Drive" className="input input-bordered w-full" />
        <input type="text" name="fuel" placeholder="Fuel" className="input input-bordered w-full" />
        <input type="text" name="luggage" placeholder="Luggage" className="input input-bordered w-full" />
        <input type="number" name="daily" placeholder="Daily Price" className="input input-bordered w-full" />
        <input type="text" name="weekly" placeholder="Weekly Price" className="input input-bordered w-full" />
        <input type="text" name="monthly" placeholder="Monthly Price" className="input input-bordered w-full" />
        <input type="text" name="booking_status" placeholder="Booking Status" className="input input-bordered w-full" />
        <input type="text" name="category" placeholder="Category (sport/suv/etc)" className="input input-bordered w-full" />
        <input type="text" name="brand" placeholder="Brand" className="input input-bordered w-full" />
        <input type="text" name="model" placeholder="Model" className="input input-bordered w-full" />
        <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full" step="0.1" />

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded mt-4"
        >
          {loading ? "Adding..." : "Add Car"}
        </button>
      </form>
    </div>
  );
};

export default AddNewCar;
