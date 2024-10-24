import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { API_BASE_URL } from "./utils/constants";
import CurrentWeather from "./components/CurrentWeather";
import LocationDetails from "./components/LocationDetails";
import DailyForecast from "./components/DailyForecast";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

const App = () => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchWeatherData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${API_BASE_URL}?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,precipitation_probability,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max`,
          { signal: controller.signal }
        );
        const weatherData = await response.json();
        setWeatherData(weatherData);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          console.error(error);
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    if (location) {
      fetchWeatherData();
    }
    return () => {
      controller.abort();
    };
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-950 flex flex-col">
      <div className="flex-grow p-4 w-full flex items-center justify-center">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 max-w-screen-xl w-full">
          <h1 className="text-3xl font-bold text-center mb-8">
            Simple Weather
          </h1>
          <SearchBar setLocation={setLocation} />
          {isLoading && <Loader />}
          {error && <p className="text-red-500">{error}</p>}
          {weatherData && (
            <>
              <LocationDetails location={location} />
              <CurrentWeather weatherData={weatherData} />
              <DailyForecast weatherData={weatherData} />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
