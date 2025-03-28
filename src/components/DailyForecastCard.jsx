/* eslint-disable react/prop-types */
import { getWeatherDescription, getWeatherIcon } from "../utils/weather";

const DailyForecastCard = ({
  date,
  weatherCode,
  maxTemp,
  minTemp,
  precipSum,
  units,
}) => {
  const weatherDescription = getWeatherDescription(weatherCode);
  const WeatherIcon = getWeatherIcon(weatherCode);
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="flex min-w-36 flex-col items-center space-y-1 rounded-lg bg-white/20 p-4 text-center shadow-sm">
      <p>{formattedDate}</p>
      <div>
        <WeatherIcon size={36} />
      </div>
      <p>{weatherDescription}</p>
      <p>
        {maxTemp}
        {units.temperature_2m_max} / {minTemp}
        {units.temperature_2m_min}
      </p>
      <p>
        Rain: {precipSum}
        {units.precipitation_sum}
      </p>
    </div>
  );
};

export default DailyForecastCard;
