import React, { useState } from "react";

const PHONE_NUMBER = "+91-9527198630";
const WHATSAPP_NUMBER = "+919527198630";
const ADDRESS = "Bondre'S The Laundry House, Thite Wasti, Kharadi, Pune";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 pb-0">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                        <img src={"./logo/logo.svg"} alt="B" className="h-10 w-10  rounded-full object-cover border-4 border-orange-500 shadow-md" />
                    </div>
                    <div>
                        <h1 className="text-lg sm:text-xl font-semibold">Bondre'S Laundry</h1>
                        <p className="text-xs sm:text-sm text-gray-500">Where Clean Feels Classy.</p>
                    </div>
                </div>

                {/* Desktop actions */}
                <div className="hidden sm:flex items-center gap-3">
                    <a href={`tel:${PHONE_NUMBER}`} className="px-4 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-50">Call Now</a>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-orange-500 text-white shadow-md">WhatsApp</a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-orange-600 hover:bg-orange-50"
                    aria-expanded={open}
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                >
                    <svg className={`h-6 w-6 ${open ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg className={`h-6 w-6 ${open ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`${open ? 'block' : 'hidden'} sm:hidden mt-3 border-t border-orange-100 pt-3`}>
                <div className="flex flex-col gap-2">
                    <a href={`tel:${PHONE_NUMBER}`} className="w-full text-center px-4 py-2 rounded-md border border-orange-500 text-orange-600">Call Now</a>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="w-full text-center px-4 py-2 rounded-md bg-orange-500 text-white">WhatsApp</a>
                    <div className="px-4 py-2 text-sm text-gray-600">{ADDRESS}</div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

