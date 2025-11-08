import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import ViewAllServices from "./pages/ViewAllServices";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsappFloat";

// ScrollToTop component that will scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ViewAllServices />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </MainLayout>
    </Router>
  );
};

export default App;
