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
import Patch from "./Pages/Hospital/Patch.jsx";
import Bank from "./Pages/Hospital/Bank.jsx";

/* ===== NEW PAGES (now) ===== */
import ProjectsListings from "./Pages/Hospital/Projectlands.jsx";
import Agriculture from "./Pages/Hospital/Agri.jsx";

/* ============================= */
/* GLOBAL SCROLL TO TOP          */
/* ============================= */
function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

/* ================================================= */
/* Home / Main Landing Page */
/* ================================================= */
function MainLandingPage() {
  const location = useLocation();

  React.useEffect(() => {
    const target = location.state?.scrollTo;

    if (target) {
      const el = document.getElementById(target);
      if (el) {
        // thoda delay taaki DOM render ho jaye
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    } else {
      // normal case: page top se
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location]);

  return (
    <>
      <Pop />
      <Navbar />

      <Home />
      <Floating />
      <Whatsapp />
      <Cat />
      <How />
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
/* ✅ Categories Page: sirf Category section */
/* ================================================= */
function CategoriesPage() {
  return (
    <>
      <Navbar />
      <Cat />
      <Footer />
    </>
  );
}

/* ================================================= */
/* App Routes */
/* ================================================= */
function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Home */}
        <Route path="/" element={<MainLandingPage />} />

        {/* Standalone pages jinke links Navbar me hai */}
        <Route
          path="/services"
          element={
            <CommonLayout>
              <Service />
            </CommonLayout>
          }
        />
        <Route
          path="/about"
          element={
            <CommonLayout>
              <About />
            </CommonLayout>
          }
        />

        {/* ✅ Categories -> sirf category section */}
        <Route path="/categories" element={<CategoriesPage />} />

        <Route
          path="/contact"
          element={
            <CommonLayout>
              <Contact />
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

        {/* Patch / Bank */}
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

        {/* Projects / Agriculture */}
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
    </>
  );
}

export default App;