import { getWeatherDescription, getWeatherIcon } from "../utils/weather";

/* eslint-disable react/prop-types */
const MainInfo = ({ location, weatherData }) => {
  const currentWeather = weatherData?.current;
  const currentWeatherUnits = weatherData?.current_units;
  const lastUpdated = new Date(currentWeather?.time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const weatherDescription = getWeatherDescription(
    currentWeather?.weather_code,
  );
  const WeatherIcon = getWeatherIcon(
    currentWeather?.weather_code,
    currentWeather?.is_day,
  );
  return (
    <section className="flex flex-col items-center justify-between space-y-4 rounded-lg bg-white/20 p-6 shadow-md sm:flex-row sm:space-y-0">
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-semibold">{location.name}</h2>
        <p className="text-lg">{location.country}</p>
        <p className="text-base">{location.timezone}</p>
        <p className="text-base">Last Updated: {lastUpdated}</p>
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <WeatherIcon size={72} />
        </div>
        <div>
          <p className="text-4xl font-bold">
            {Math.round(currentWeather?.temperature_2m)}
            {currentWeatherUnits.temperature_2m}
          </p>
          <p className="text-2xl capitalize">{weatherDescription}</p>
          <p>
            Feels like {Math.round(currentWeather?.apparent_temperature)}
            {currentWeatherUnits.apparent_temperature}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainInfo;
