'use client'
import { ActivityScore, SearchedLocation, WeatherForecast } from "@/lib/types";
import { useState } from "react";
import ErrorMessage from "./_components/Error";
import PageHeader from "./_components/Header";
import SearchBar from "./_components/SearchBar";
import LocationDisplay from "./_components/Location";
import ActivityCard from "./_components/ActivityCard";
import { evaluateActivities, getLocationData, getWeatherForecast } from "./_serverscripts/weatherforecast";

export default function Home() {
  const [city, setCity] = useState('');
  const [location, setLocation] = useState<SearchedLocation>();
  const [activities, setActivities] = useState<ActivityScore[]>([]);
  const [forecast, setForecast] = useState<WeatherForecast[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');  

  const handleSearch = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError('');

    try {
      setLocation( await getLocationData(city));  
      const results = await evaluateActivities(city); 
      const weatherForecast =  await getWeatherForecast(city);
      setActivities(results);
      setForecast(weatherForecast);
     
    } catch (err) {
      console.log(err)
      setError('Unable to find weather data for this location. Please try another city.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-conic-360 from-blue-400 via-blue-50 to-blue-400 from-end">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <PageHeader />

        <SearchBar
          city={city}
          setCity={setCity}
          handleSearch={handleSearch}
          loading={loading}
        />

        {error && <ErrorMessage message={error} />}

        {location && <LocationDisplay city={location?.name as string} 
        country={location?.country as string} />}

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8" aria-label="Activity weather forecasts">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.activity}
              activity={activity}
              forecast={forecast}
            />
          ))}
        </section>
      </div>
    </main>
  );
}