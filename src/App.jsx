import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EventListingPage from "./Pages/EventListingPage";
function App() {
  return (
    <Router>
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <span className="font-bold">CommunionHub</span>
        <div>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/events" className="mx-2">Events</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventListingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
