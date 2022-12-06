import "./styles.css";
import Header from "./component/navbar";
import LandingPage from "./pages/LandingPage";
import Booking from "./pages/BookingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectSlots from "./pages/selectSlots";
import List from "./pages/List";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/slots" element={<SelectSlots />} />
          <Route path="/list" element={<List />} />

          {/* SelectSlots */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
