import { useEffect, useState } from "react";
import CurrentWeatherDetailGrid from "./components/CurrentWeatherDetailGrid";
import DailyForecast from "./components/DailyForecast";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import MainInfo from "./components/MainInfo";
import SearchBar from "./components/SearchBar";
import { API_BASE_URL } from "./utils/constants";

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
      const requestParams = new URLSearchParams({
        latitude: location.latitude.toString(),
        longitude: location.longitude.toString(),
        current:
          "temperature_2m,apparent_temperature,is_day,precipitation,weather_code,relative_humidity_2m,wind_speed_10m",
        daily:
          "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum",
        timezone: location.timezone || "auto",
        forecast_days: "7",
      });
      try {
        const response = await fetch(
          `${API_BASE_URL}?${requestParams.toString()}`,
          { signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error("Weather response error! Status: " + response.status);
        }
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
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-purple-700 to-purple-950">
      <div className="flex w-full flex-grow items-center justify-center p-4">
        <div className="w-full max-w-screen-md rounded-lg bg-white bg-opacity-20 p-4 backdrop-blur-lg">
          <h1 className="mb-8 text-center text-3xl font-bold">
            Simple Weather
          </h1>
          <SearchBar setLocation={setLocation} />
          {isLoading && <Loader />}
          {error && <p className="text-red-500">{error}</p>}
          {weatherData && (
            <div className="space-y-4">
              <MainInfo location={location} weatherData={weatherData} />
              <CurrentWeatherDetailGrid weatherData={weatherData} />
              <DailyForecast weatherData={weatherData} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
