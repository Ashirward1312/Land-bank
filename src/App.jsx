import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

/* ===== Common Components ===== */
import Navbar from "./Pages/Nav/Nav.jsx";
import Footer from "./Pages/Footer/Footer.jsx";

/* ===== Home Page Sections ===== */
import Home from "./Pages/Home/Home.jsx";
import Cat from "./Pages/Categories/Cat.jsx";
import Service from "./Pages/Service/Service.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Floating from "./Pages/Floating/Floating.jsx";
import Whatsapp from "./Pages/Whatsapp/Whatsapp.jsx";
import How from "./Pages/How/How.jsx";
import Pop from "./Pages/Pop/Pop.jsx";
import Gallery from "./Pages/Gallery/Gallery.jsx";

/* ===== Hospital Main Pages ===== */
import Hospital from "./Pages/Hospital/Hospital.jsx";
import Commercial from "./Pages/Hospital/Commercial.jsx";
import Residence from "./Pages/Hospital/Residence.jsx";
import Land from "./Pages/Hospital/Land.jsx";
import Others from "./Pages/Hospital/Others.jsx";

/* ===== Hospital Listing Pages ===== */
import Bestbuy from "./Pages/Hospital/Bestbuy.jsx";
import Jointventures from "./Pages/Hospital/Jointventures.jsx";
import Education from "./Pages/Hospital/Education.jsx";
import Farmhouse from "./Pages/Hospital/Farmhouse.jsx";
import Malls from "./Pages/Hospital/Malls.jsx";
import Resorts from "./Pages/Hospital/Resort.jsx";
import Warehouse from "./Pages/Hospital/Warehouse.jsx";
import Lease from "./Pages/Hospital/Lease.jsx";
import LandInvestmentListings from "./Pages/Hospital/Landinvestment.jsx";

/* ===== NEW PAGES (earlier) ===== */
import Patch from "./Pages/Hospital/Patch.jsx"; // Big Land / Patch Work
import Bank from "./Pages/Hospital/Bank.jsx";   // Bank / Auction properties

/* ===== NEW PAGES (now) ===== */
import ProjectsListings from "./Pages/Hospital/Projectlands.jsx";   // Project Lands page
import Agriculture from "./Pages/Hospital/Agri.jsx";     // Agriculture Land page

/* ================================================= */
/* Home / Main Landing Page */
/* ================================================= */
function MainLandingPage() {
  const location = useLocation();

  React.useEffect(() => {
    // Agar state me scrollTo: "categories" aaya ho to categories tak scroll karo
    if (location.state?.scrollTo === "categories") {
      const el = document.getElementById("categories");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    } else {
      // normal home navigation pe top pe le jao
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location]);

  return (
    <>
      <Pop />
      <Navbar />

      {/* Home sections */}
      <Home />
      <Floating />
      <Whatsapp />
      <Cat />
      <Service />
      <How />

      {/* Gallery ab yahan nahi, alag route pe */}
      {/* <Gallery /> */}

      <About />
      <Contact />

      <Footer />
    </>
  );
}

/* ================================================= */
/* Common Layout (Navbar + Footer for all inner pages) */
/* ================================================= */
function CommonLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

/* ================================================= */
/* App Routes */
/* ================================================= */
function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<MainLandingPage />} />

      {/* Gallery ab separate page hai */}
      <Route
        path="/gallery"
        element={
          <CommonLayout>
            <Gallery />
          </CommonLayout>
        }
      />

      {/* Hospital Main Pages */}
      <Route
        path="/hospital"
        element={
          <CommonLayout>
            <Hospital />
          </CommonLayout>
        }
      />
      <Route
        path="/commercial"
        element={
          <CommonLayout>
            <Commercial />
          </CommonLayout>
        }
      />
      <Route
        path="/residential"
        element={
          <CommonLayout>
            <Residence />
          </CommonLayout>
        }
      />
      <Route
        path="/land"
        element={
          <CommonLayout>
            <Land />
          </CommonLayout>
        }
      />
      <Route
        path="/others"
        element={
          <CommonLayout>
            <Others />
          </CommonLayout>
        }
      />

      {/* Hospital Listing Pages */}
      <Route
        path="/bestbuy"
        element={
          <CommonLayout>
            <Bestbuy />
          </CommonLayout>
        }
      />
      <Route
        path="/jointventures"
        element={
          <CommonLayout>
            <Jointventures />
          </CommonLayout>
        }
      />
      <Route
        path="/education"
        element={
          <CommonLayout>
            <Education />
          </CommonLayout>
        }
      />
      <Route
        path="/farmhouse"
        element={
          <CommonLayout>
            <Farmhouse />
          </CommonLayout>
        }
      />
      <Route
        path="/malls"
        element={
          <CommonLayout>
            <Malls />
          </CommonLayout>
        }
      />
      <Route
        path="/resorts-wedding"
        element={
          <CommonLayout>
            <Resorts />
          </CommonLayout>
        }
      />
      <Route
        path="/warehouse"
        element={
          <CommonLayout>
            <Warehouse />
          </CommonLayout>
        }
      />
      <Route
        path="/lease"
        element={
          <CommonLayout>
            <Lease />
          </CommonLayout>
        }
      />
      <Route
        path="/land-investment"
        element={
          <CommonLayout>
            <LandInvestmentListings />
          </CommonLayout>
        }
      />

      {/* NEW ROUTES: Big Land / Patch Work & Bank / Auction */}
      <Route
        path="/patch"
        element={
          <CommonLayout>
            <Patch />
          </CommonLayout>
        }
      />
      <Route
        path="/bank"
        element={
          <CommonLayout>
            <Bank />
          </CommonLayout>
        }
      />

      {/* NEW ROUTES: Project Lands & Agriculture Land */}
      <Route
        path="/projects"
        element={
          <CommonLayout>
            <ProjectsListings />
          </CommonLayout>
        }
      />
      <Route
        path="/agriculture"
        element={
          <CommonLayout>
            <Agriculture />
          </CommonLayout>
        }
      />
    </Routes>
  );
}

export default App;