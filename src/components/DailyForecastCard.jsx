/* eslint-disable react/prop-types */

import { WiRain } from "react-icons/wi";
import { getWeatherCondition, getWeatherIcon } from "../utils/utils";

const DailyForecastCard = ({
  date,
  maxTemp,
  minTemp,
  weatherCode,
  precipProb,
  units,
}) => {
  const weatherCondition = getWeatherCondition(weatherCode);
  const weatherIcon = getWeatherIcon(weatherCondition);

  return (
    <div className="bg-white bg-opacity-20 rounded-lg p-4 flex-none flex flex-col text-center w-40 lg:w-48 xl:flex-1">
      <p className="font-semibold">
        {date.toLocaleDateString("en-US", { weekday: "short" })}
      </p>
      <div className="w-1/2 mx-auto">{weatherIcon}</div>
      <p className="font-semibold">{maxTemp + units.temperature_2m_max}</p>
      <p className="text-gray-900">{minTemp + units.temperature_2m_min}</p>
      <p className="flex items-center justify-center">
        <WiRain className="inline-block text-blue-950" />
        {precipProb + units.precipitation_probability_max}
      </p>
    </div>
  );
};

export default DailyForecastCard;
