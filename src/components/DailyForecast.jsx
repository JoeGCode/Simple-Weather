/* eslint-disable react/prop-types */
import DailyForecastCard from "./DailyForecastCard";
const DailyForecast = ({ weatherData }) => {
  return (
    <section>
      <h3 className="mb-4 text-xl font-semibold">7-Day Forecast</h3>
      <div className="custom-scrollbar flex space-x-4 overflow-x-auto pb-2">
        {weatherData.daily.time.map((date, index) => (
          <DailyForecastCard
            key={date}
            date={date}
            weatherCode={weatherData.daily.weather_code[index]}
            maxTemp={Math.round(weatherData.daily.temperature_2m_max[index])}
            minTemp={Math.round(weatherData.daily.temperature_2m_min[index])}
            precipSum={Math.round(weatherData.daily.precipitation_sum[index])}
            units={weatherData.daily_units}
          />
        ))}
      </div>
    </section>
  );
};

export default DailyForecast;
