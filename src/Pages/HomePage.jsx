import {useNavigate} from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-5 text-center">
            <h1 className="text-3xl font-bold">Connecting People Across Faiths & Interests</h1>
            <p className="mt-4 text-lg">Connecting people of all faiths through events and community support.</p>
            <button
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => navigate("/events")}
            >
                Explore Events
            </button>
        </div>
    );
}
export default HomePage