import React from "react";

const PHONE_NUMBER = "+91-9527198630";
const WHATSAPP_NUMBER = "+919527198630";
const ADDRESS = "Bondre'S Laundry, Thite Vasti, Kharadi, Pune";

function Navbar() {
    return (
        <nav className="max-w-6xl mx-auto px-6 py-4 pb-0 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">B</div>
                <div>
                    <h1 className="text-xl font-semibold">Bondre'S Laundry</h1>
                    <p className="text-sm text-gray-500">Fresh Clothes, Fresh Start</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <a href={`tel:${PHONE_NUMBER}`} className="hidden sm:inline-block px-4 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-50">Call Now</a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-lg bg-orange-500 text-white shadow-md">WhatsApp</a>
            </div>
        </nav>
    );
}
export default Navbar;

