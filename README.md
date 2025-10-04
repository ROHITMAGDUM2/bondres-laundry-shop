# 🧺 Bondre’s The Laundry House

**Fresh Clothes, Fresh Start — Bondre’s The Laundry House**

A modern, mobile-friendly website built with **React** and **TailwindCSS**, designed for a local laundry service.  
It includes pages for Home, About, and Services — all styled in a warm orange & white theme for a friendly and professional feel.

---

## ✨ Features

- 🧼 **Responsive Design** — Works beautifully on phones, tablets, and desktops  
- 🧺 **Clean & Simple UI** — Orange & white theme with professional layout  
- 🚪 **Doorstep Pickup/Delivery CTA** — Quick contact via call or WhatsApp  
- 💬 **Framer Motion Animations** — Smooth fade and slide effects  
- 🧾 **Separate Pages** — Home, About, and Services (easily expandable)

---

## 🧩 Tech Stack

- **React 18+**
- **TailwindCSS 3+**
- **Framer Motion** (for smooth animations)
- *(Optional)* **React Router DOM** for navigation

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/ROHITMAGDUM2/bondres-the-laundry-house.git
cd bondres-the-laundry-house
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add TailwindCSS (if not preconfigured)
If Tailwind is not already set up:
```bash
npx tailwindcss init -p
```
Then configure `tailwind.config.js` and add Tailwind imports to `index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Run the Development Server
```bash
npm run dev
```

Your site will run on [http://localhost:5173](http://localhost:5173) (or similar).

---

## 📄 Project Structure

```
src/
│
├── components/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔗 Suggested Routes (with React Router)
If you’re using React Router:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ServicesPage } from "./components/Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 🧾 Customization

1. **Edit contact info** — in each component, update:
   ```js
   const PHONE_NUMBER = "";
   const WHATSAPP_NUMBER = "";
   const ADDRESS = "";
   ```
2. **Replace gallery placeholders** with real photos in `/public/images/`
3. **Adjust colors** via Tailwind classes (`bg-orange-500`, `text-orange-600`, etc.)

---

## 💡 Future Enhancements

- 📅 Add booking form (via EmailJS or Firebase)
- 📷 Gallery page with image grid
- 📍 Google Maps embed for location
- 💬 Testimonials & customer feedback

---

## 👨‍🔧 Author

**Bondre’s The Laundry House**  
Website developed by **Rohit**  
📞 Call / WhatsApp: `+91-XXXXXXXXXX`

---

### 🧡 Thank you for supporting local business!
