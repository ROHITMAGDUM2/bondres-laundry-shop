import React from 'react';

const PHONE_NUMBER = "+91-9527198630";
const WHATSAPP_NUMBER = "+919527198630";
const ADDRESS = "Bondre'S Laundry, Thite Vasti, Kharadi, Pune";


const Footer = () => {
    return (
        <footer className="max-w-6xl mx-auto px-6 py-10 border-t border-orange-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div>
                    <h4 className="font-bold">Bondre'S Laundry</h4>
                    <p className="text-sm text-gray-600 mt-2">{ADDRESS}</p>
                </div>

                <div>
                    <h5 className="font-semibold">Hours</h5>
                    <p className="text-sm text-gray-600 mt-2">Mon–Sun: 8:00 AM — 8:00 PM</p>
                </div>

                <div>
                    <h5 className="font-semibold">Contact</h5>
                    <p className="text-sm text-gray-600 mt-2">Phone: {PHONE_NUMBER}</p>
                    <p className="text-sm text-gray-600">WhatsApp: {WHATSAPP_NUMBER}</p>
                </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Bondre'S Laundry — All rights reserved.</div>
        </footer>
    );
}

export default Footer;
