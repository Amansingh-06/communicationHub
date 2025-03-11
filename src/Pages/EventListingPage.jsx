import { useState } from "react";
import CHARITY from '../assets/CHARITY.webp'
function EventListingPage() {
    const [events, setEvents] = useState([
        {
            title: "Charity Drive",
            date: "2025-03-20",
            location: "New York",
            category: "Charity",
            image: CHARITY
        },
        {
            title: "Interfaith Meetup",
            date: "2025-03-25",
            location: "Los Angeles",
            category: "Social",
            image: "https://tse1.mm.bing.net/th?id=OIP.Ty4VDrK2siE_3gbk6qbwmQHaEo&pid=Api&P=0&h=180"
        }
    ]);

    const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", category: "", image: "" });
    const [filter, setFilter] = useState("All");

    const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

    const addEvent = () => {
        if (newEvent.title && newEvent.date && newEvent.location && newEvent.category) {
            const eventWithImage = {
                ...newEvent,
                image: newEvent.image || "https://via.placeholder.com/150" // Default image if not provided
            };
            setEvents([...events, eventWithImage]);
            setNewEvent({ title: "", date: "", location: "", category: "", image: "" });
        }
    };

    return (
        <div className="p-5 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Event Listings</h2>

            {/* Filter Buttons */}
            <div className="flex gap-3 justify-center mb-6">
                {["All", "Religious", "Social", "Charity"].map((cat) => (
                    <button key={cat} onClick={() => setFilter(cat)}
                        className={`px-4 py-1 rounded ${filter === cat ? "bg-blue-600 text-white" : "bg-gray-300"}`}>
                        {cat}
                    </button>
                ))}
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event, index) => (
                    <div key={index} className="border rounded-lg shadow-lg p-4 bg-white">
                        <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-md mb-3" />
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        <p className="text-gray-600">{event.date} - {event.location}</p>
                        <span className="text-sm px-2 py-1 bg-gray-200 rounded">{event.category}</span>
                    </div>
                ))}
            </div>

            {/* Add Event Form */}
            <div className="mt-8 p-6 border rounded-lg bg-gray-100">
                <h3 className="text-lg font-bold mb-3">Add New Event</h3>
                <input className="border p-2 w-full mb-2" placeholder="Title"
                    value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <input className="border p-2 w-full mb-2" type="date"
                    value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
                <input className="border p-2 w-full mb-2" placeholder="Location"
                    value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
                <input className="border p-2 w-full mb-2" placeholder="Image URL (Optional)"
                    value={newEvent.image} onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })} />
                <select className="border p-2 w-full mb-2"
                    value={newEvent.category} onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}>
                    <option value="">Select Category</option>
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                </select>
                <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    onClick={addEvent}>
                    Add Event
                </button>
            </div>
        </div>
    );
}

export default EventListingPage;
