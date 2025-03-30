import React, { useState, useEffect } from 'react';
import { MapPin, Loader, AlertCircle } from 'lucide-react';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          try {
            // OpenStreetMap Overpass API for hospitals nearby
            const overpassQuery = `[out:json];node["amenity"="hospital"](around:5000, ${latitude}, ${longitude});out;`;
            const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`);
            const data = await response.json();

            if (data.elements.length > 0) {
              setHospitals(data.elements);
            } else {
              setError("No hospitals found nearby.");
            }
          } catch (err) {
            setError("Failed to fetch hospital data.");
          }
          setLoading(false);
        },
        (error) => {
          setError("Location access denied. Please enable location services.");
          setLoading(false);
        },
        { enableHighAccuracy: true }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">Nearby Hospitals</h1>
      {loading && (
        <div className="flex flex-col items-center text-center">
          <Loader className="animate-spin w-10 h-10 text-blue-600" />
          <p className="mt-2 text-gray-600">Detecting location & fetching hospitals...</p>
        </div>
      )}
      {error && (
        <div className="flex flex-col items-center text-center text-red-500">
          <AlertCircle className="w-10 h-10" />
          <p className="mt-2">{error}</p>
        </div>
      )}
      {!loading && !error && hospitals.length > 0 && (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {hospitals.map((hospital, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="p-6 flex flex-col items-start">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{hospital.tags.name || "Unknown Hospital"}</h3>
                <p className="text-gray-600 flex items-center"><MapPin className="w-5 h-5 mr-2 text-blue-500" />{hospital.tags["addr:city"] || "Location not available"}</p>
                <p className="text-gray-500">Latitude: {hospital.lat}, Longitude: {hospital.lon}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hospitals;
