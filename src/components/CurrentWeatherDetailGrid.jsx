/* eslint-disable react/prop-types */
const CurrentWeatherDetailGrid = ({ weatherData }) => {
  const currentWeather = weatherData?.current;
  const currentWeatherUnits = weatherData?.current_units;
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="current-weather-detail-card">
        <p className="text-xl font-semibold">Humidity</p>
        <p className="text-2xl font-bold">
          {Math.round(currentWeather.relative_humidity_2m) +
            currentWeatherUnits.relative_humidity_2m}
        </p>
      </div>
      <div className="current-weather-detail-card">
        <p className="text-xl font-semibold">Wind Speed</p>
        <p className="text-2xl font-bold">
          {Math.round(currentWeather.wind_speed_10m) +
            currentWeatherUnits.wind_speed_10m}
        </p>
      </div>
      <div className="current-weather-detail-card">
        <p className="text-xl font-semibold">Precipitation</p>
        <p className="text-2xl font-bold">
          {Math.round(currentWeather.precipitation) +
            currentWeatherUnits.precipitation}
        </p>
      </div>
    </section>
  );
};

export default CurrentWeatherDetailGrid;
