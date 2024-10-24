/* eslint-disable react/prop-types */

import DailyForecastCard from "./DailyForecastCard";

const DailyForecast = ({ weatherData }) => {
  const daily = weatherData?.daily;
  const units = weatherData?.daily_units;

  if (!daily || !units) return null;

  return (
    <section className="my-4">
      <h3 className="font-semibold text-2xl text-center mb-2">
        7-day Forecast
      </h3>
      <div className="flex gap-2 overflow-x-scroll whitespace-nowrap scroll-smooth w-full custom-scrollbar hide-scrollbar-on-xl">
        {daily.time.map((date, index) => (
          <DailyForecastCard
            key={date}
            date={new Date(date)}
            maxTemp={Math.round(daily.temperature_2m_max[index])}
            minTemp={Math.round(daily.temperature_2m_min[index])}
            weatherCode={daily.weather_code[index]}
            precipProb={daily.precipitation_probability_max[index]}
            units={units}
          />
        ))}
      </div>
    </section>
  );
};

export default DailyForecast;
