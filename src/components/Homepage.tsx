import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Simple fade-in section component
const FadeInSection: React.FC<{ delay?: number; children: React.ReactNode }> = ({ delay = 0, children }) => {
  const [isVisible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </div>
  );
};

// === REPLACE THESE PLACEHOLDERS ===
const PHONE_NUMBER = "+91-9527198630";
const WHATSAPP_NUMBER = "+919527198630";
const ADDRESS = "Bondre'S The Laundry House, Thite Wasti, Kharadi, Pune";
// ==================================

type Service = { title: string; desc: string; price: string };

function Homepage() {
  const services: Service[] = [
    { title: "Washing & Ironing", desc: "Clothes washed and ironed neatly", price: "₹95/kg" },
    { title: "Dry Cleaning", desc: "Professional dry cleaning for special garments", price: "₹110/item" },
    { title: "Pickup & Delivery", desc: "Fast doorstep pickup & drop.", price: "Free for orders above ₹250" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      <Navbar />

      {/* HERO */}
      <header className="bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-600">Fresh Clothes, Fresh Start</h2>
            <p className="mt-4 text-gray-600">Reliable local laundry & dry-cleaning with doorstep pickup and fastest delivery options. Trusted by families across the neighbourhood.</p>

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
                <img src={"./img/shop11.jpg"} alt={"Your clothes — Clean & Fresh"}
                  className="object-cover w-full h-64 md:h-80 rounded-2xl" />
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
            <h3 className="text-2xl font-bold text-gray-800">Why Bondre'S The Laundry House?</h3>
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
            <div className="mt-3 text-2xl font-bold">₹95/kg</div>
            <p className="text-sm text-gray-600 mt-2">Washing, drying & ironing.</p>
          </div>
          <div className="p-6 rounded-xl border border-orange-100">
            <h4 className="font-semibold">Dry Clean</h4>
            <div className="mt-3 text-2xl font-bold">₹110/item</div>
            <p className="text-sm text-gray-600 mt-2">For delicate & special garments.</p>
          </div>
          <div className="p-6 rounded-xl border border-orange-100">
            <h4 className="font-semibold">Pickup & Delivery</h4>
            <div className="mt-3 text-2xl font-bold">Free over ₹250</div>
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
            {[
              "./img/shop 1.jpg",
              "./img/shop2.jpg",
              "./img/shop3.jpg",
              "./img/shop4.jpg",
              "./img/shop5.jpg",
              "./img/shop6.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="h-36 rounded-lg bg-white border border-orange-100 flex items-center justify-center text-sm text-gray-400">
                <img src={src} alt={`Bondres The Laundry House Gallery ${i + 1}`}
                  className="object-cover w-full h-36 hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* map */}

      <FadeInSection delay={1.9}>
        <section className="bg-orange-50">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <h3 className="text-2xl font-bold">Map</h3>

            {/* Grid Layout for Photo + Map */}
            <div className="grid grid-cols-1 gap-4">
              {/* House Photo */}
              <div className="flex flex-col items-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1759859045636!6m8!1m7!1sEaxCD4tlZnrdilrjTIKGPA!2m2!1d18.54532879315448!2d73.93937784091587!3f172.1389153643934!4f-6.969514937677985!5f2.372766989657717"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg mt-4"
                />
              </div>

              {/* Google Map */}
              <div className="flex flex-col items-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d801.5943899806359!2d73.93864926952236!3d18.545210270375147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMyJzQyLjgiTiA3M8KwNTYnMjEuNSJF!5e1!3m2!1sen!2sin!4v1759859447087!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>

                {/* Buttons */}
                <div className="flex gap-3 mt-3">
                  <div className="mt-3">
                    <a
                      href="https://www.google.com/maps/@18.5453288,73.9393778,3a,75y,133.83h,87.62t/data=!3m7!1e1!3m5!1sEaxCD4tlZnrdilrjTIKGPA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D2.3821356293329927%26panoid%3DEaxCD4tlZnrdilrjTIKGPA%26yaw%3D133.8254887667771!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </FadeInSection>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
export default Homepage;

