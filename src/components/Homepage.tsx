/*
Bondre'S Laundry — React + Tailwind Homepage (single-file React component)

How to use:
1. Place this file in your React app (e.g. src/components/Homepage.jsx).
2. Ensure TailwindCSS is configured in your project.
3. Install framer-motion if you want animations: `npm install framer-motion` (optional).
4. Replace the PHONE_NUMBER, WHATSAPP_NUMBER and ADDRESS placeholders below with real data.

Notes:
- Phone and WhatsApp use tel: and https://wa.me/ formats respectively.
- The color theme uses orange & white (warm & local) throughout Tailwind classes.
*/

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

// === REPLACE THESE PLACEHOLDERS ===
const PHONE_NUMBER = "+91-9527198630"; // e.g. +91-9876543210
const WHATSAPP_NUMBER = "+919527198630"; // wa.me format (no + or dashes also works with +)
const ADDRESS = "Bondre'S Laundry, Thite Vasti, Kharadi, Pune";
// ==================================

type Service = { title: string; desc: string; price: string };

function Homepage() {
  const services: Service[] = [
    { title: "Washing & Ironing", desc: "Clothes washed and ironed neatly", price: "₹50/kg" },
    { title: "Dry Cleaning", desc: "Professional dry cleaning for special garments", price: "₹150/item" },
    { title: "Pickup & Delivery", desc: "Free for orders above ₹200", price: "—" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      <Navbar />

      {/* HERO */}
      <header className="bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-600">Fresh Clothes, Fresh Start</h2>
            <p className="mt-4 text-gray-600">Reliable local laundry & dry-cleaning with doorstep pickup and fastest delivery options. Trusted by families across the neighborhood.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${PHONE_NUMBER}`} className="px-5 py-3 rounded-lg bg-orange-600 text-white font-semibold shadow">Book Now</a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg border border-orange-600 text-orange-600">Message on WhatsApp</a>
            </div>

            <div className="mt-6 flex gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 bg-orange-500 rounded-full" /> Fastest delivery
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 bg-orange-500 rounded-full" /> Affordable prices
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 bg-orange-500 rounded-full" /> Doorstep pickup & drop
              </div>
            </div>
          </div>

          <div className="w-full">
            {/* Placeholder for hero image / mockup */}
            <div className="w-full h-64 md:h-80 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center">
              <div className="text-center text-orange-700">
                <p className="font-semibold">Your clothes —</p>
                <p className="text-2xl font-bold">Clean & Fresh</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-gray-800">Our Services</h3>
        <p className="text-gray-500 mt-2">Careful handling, professional cleaning.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-orange-100 shadow-sm">
              <h4 className="font-semibold text-lg text-orange-600">{s.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              <div className="mt-4 text-sm font-medium">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-orange-50">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800">Why Bondre'S Laundry?</h3>
            <p className="text-gray-600 mt-2">We combine local care with professional standards — quick turnarounds and transparent pricing.</p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 h-3 w-3 bg-orange-600 rounded-full" />
                <div>
                  <div className="font-semibold">Trusted & Local</div>
                  <div className="text-sm text-gray-600">Family-run service with attention to detail.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 h-3 w-3 bg-orange-600 rounded-full" />
                <div>
                  <div className="font-semibold">Fast Turnaround</div>
                  <div className="text-sm text-gray-600">Same-day options for most orders.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 h-3 w-3 bg-orange-600 rounded-full" />
                <div>
                  <div className="font-semibold">Eco-friendly Detergents</div>
                  <div className="text-sm text-gray-600">Gentle on fabrics and skin.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-white border border-orange-100">
            <h4 className="font-semibold">Quick Contact</h4>
            <p className="text-sm text-gray-600 mt-2">{ADDRESS}</p>
            <div className="mt-4 flex flex-col gap-3">
              <a href={`tel:${PHONE_NUMBER}`} className="px-4 py-2 rounded-md bg-orange-600 text-white text-center">Call {PHONE_NUMBER}</a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-orange-600 text-center text-orange-600">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Pricing</h3>
        <p className="text-gray-500 mt-2">Clear, simple pricing — custom packages available.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-orange-100">
            <h4 className="font-semibold">Basic Wash</h4>
            <div className="mt-3 text-2xl font-bold">₹50/kg</div>
            <p className="text-sm text-gray-600 mt-2">Washing, drying & ironing.</p>
          </div>
          <div className="p-6 rounded-xl border border-orange-100">
            <h4 className="font-semibold">Dry Clean</h4>
            <div className="mt-3 text-2xl font-bold">₹150/item</div>
            <p className="text-sm text-gray-600 mt-2">For delicate & special garments.</p>
          </div>
          <div className="p-6 rounded-xl border border-orange-100">
            <h4 className="font-semibold">Pickup & Delivery</h4>
            <div className="mt-3 text-2xl font-bold">Free over ₹200</div>
            <p className="text-sm text-gray-600 mt-2">Fast doorstep pickup & drop.</p>
          </div>
        </div>
      </section>

      {/* GALLERY (placeholder) */}
      <section className="bg-orange-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">Gallery</h3>
          <p className="text-gray-500 mt-2">Photos of the shop, team, and the cleaning process.</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-36 rounded-lg bg-white border border-orange-100 flex items-center justify-center text-sm text-gray-400">Photo {i + 1}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
export default Homepage;

