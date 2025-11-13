# RentWheels – Car Rental Platform

**Live Site URL:** [https://rentwheels-f6260.web.app](https://rentwheels-f6260.web.app)

---

## Project Overview

RentWheels is a full-stack **MERN (MongoDB, Express.js, React, Node.js)** car rental platform that connects users with local car owners or rental providers.  
Users can browse available cars, view details, and book rentals for specific dates, while providers can list and manage their own cars efficiently.

---

## Core Features

- **User Authentication:**  
  Secure login/register system using Firebase Authentication with email/password and Google sign-in.

- **Private & Public Routes:**  
  Protected routes for Add Car, My Listings, and My Bookings; public routes like Home and Browse Cars.

- **Car Management (CRUD):**  
  Add, update, delete, and view cars with real-time updates from MongoDB.

- **Dynamic Navbar & Footer:**

  - Navbar changes based on login state.
  - Displays user photo and dropdown with profile details when logged in.
  - Footer includes logo, contact info, and social links.

- **Responsive Home Page:**

  - Hero Banner built with **Swiper.js** (3+ slides).
  - Featured Cars section (6 latest from database).
  - Static “Why Rent With Us” section (Easy Booking, Affordable Rates, Trusted Providers, 24/7 Support).
  - Extra Sections: _Top Rated Cars_ and _Customer Testimonials._

- **Booking System:**  
  Users can book cars, view their bookings, and manage them via the **My Bookings** page.

- **Interactive UI:**  
  Uses **React Toastify** and **SweetAlert2** for feedback and confirmation dialogs.

- **Modern Tech Stack:**  
  React, Firebase, MongoDB, Express, Node.js, Tailwind CSS, DaisyUI, Framer Motion, and Recharts.

---

## Technologies Used

| Category            | Technologies                                                        |
| ------------------- | ------------------------------------------------------------------- |
| **Frontend**        | React.js, Tailwind CSS, DaisyUI, Framer Motion, Swiper.js, Recharts |
| **Backend**         | Node.js, Express.js, MongoDB                                        |
| **Authentication**  | Firebase Auth                                                       |
| **Hosting**         | Firebase Hosting (Client), Vercel (Server)                          |
| **UI Enhancements** | Framer Motion, Lottie React, SweetAlert2, React Toastify            |

---

## Dependencies

```

  - tailwindcss/vite: 4.1.17
  - daisyui: 5.4.7
  - firebase: 12.5.0
  - framer-motion 12.23.24
  - lottie-react":2.4.1
  - react:19.1.1
  - react-dom:19.1.1
  - react-fast-marquee: 1.6.5
  - react-icons: 5.5.0
  - react-intersection-observer: 10.0.0
  - react-router: 7.7.5
  - react-simple-typewriter: 5.0.1
  - react-toastify: 11.0.5
  - react-tooltip: 5.30.0
  - recharts: 3.4.1
  - sweetalert2: 11.26.3
  - swiper: 12.0.3
  - tailwindcss: 4.1.1

```
