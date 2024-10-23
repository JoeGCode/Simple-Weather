/* eslint-disable react/prop-types */

import DailyForecastCard from "./DailyForecastCard";

const DailyForecast = ({ forecasts, units }) => {
  if (!forecasts || !units) return null;

  return (
    <section className="my-4">
      <h3 className="font-semibold text-2xl text-center mb-2">
        7-day Forecast
      </h3>
      <div className="flex gap-2 overflow-x-scroll whitespace-nowrap scroll-smooth w-full custom-scrollbar hide-scrollbar-on-xl">
        {forecasts.map((forecast, idx) => (
          <DailyForecastCard key={idx} forecast={forecast} units={units} />
        ))}
      </div>
    </section>
  );
};

export default DailyForecast;
