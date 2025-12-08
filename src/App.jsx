import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home.jsx";
import Navbar from "./Pages/Nav/Nav.jsx";
import Cat from "./Pages/Categories/Cat.jsx";
import Service from "./Pages/Service/Service.jsx";
import About from "./Pages/About/About.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
// import Faq from "./Pages/Faq/Faq.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Floating from "./Pages/Floating/Floating.jsx";
import Whatsapp from "./Pages/Whatsapp/Whatsapp.jsx";
import How from "./Pages/How/How.jsx";
import Pop from "./Pages/Pop/Pop.jsx";

// Hospital page
import Hospital from "./Pages/Hospital/Hospital.jsx";

// Commercial page
import Commercial from "./Pages/Hospital/Commercial.jsx";

// Residential page
import Residence from "./Pages/Hospital/Residence.jsx";

// Land page
import Land from "./Pages/Hospital/Land.jsx";

// Others (video) page – yahan apna actual path lagao
import Others from "./Pages/Hospital/Others.jsx";
// agar file "./Pages/Other/Others.jsx" me hai to path uske hisab se change kar lena

// Home / main landing page layout
function MainLandingPage() {
  return (
    <div>
      <Pop />
      <Navbar />
      <Home />
      <Floating />
      <Whatsapp />
      <Cat />
      <Service />
      <How />
      <About />
      <Contact />
      {/* <Faq /> */}
      <Footer />
    </div>
  );
}

// Hospital page layout
function HospitalPage() {
  return (
    <div>
      <Navbar />
      <Hospital />
      <Footer />
    </div>
  );
}

// Commercial page layout
function CommercialPage() {
  return (
    <div>
      <Navbar />
      <Commercial />
      <Footer />
    </div>
  );
}

// Residential page layout
function ResidencePage() {
  return (
    <div>
      <Navbar />
      <Residence />
      <Footer />
    </div>
  );
}

// Land page layout
function LandPage() {
  return (
    <div>
      <Navbar />
      <Land />
      <Footer />
    </div>
  );
}

// Others (video) page layout
function OthersPage() {
  return (
    <div>
      <Navbar />
      <Others />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLandingPage />} />
      <Route path="/Hospital" element={<HospitalPage />} />
      <Route path="/commercial" element={<CommercialPage />} />
      <Route path="/residential" element={<ResidencePage />} />
      <Route path="/land" element={<LandPage />} />
      <Route path="/others" element={<OthersPage />} />  {/* 👈 video page */}
    </Routes>
  );
}

export default App;