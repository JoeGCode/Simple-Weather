/* eslint-disable react/prop-types */

import { getWeatherCondition, getWeatherIcon } from "../utils/utils";

const CurrentWeather = ({ currentWeather, currentWeatherUnits }) => {
  if (!currentWeather || !currentWeatherUnits) {
    return null;
  }

  const weatherCondition = getWeatherCondition(currentWeather.weather_code);
  const weatherIcon = getWeatherIcon(weatherCondition);

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div className="bg-white bg-opacity-20 rounded-lg p-4 flex text-center col-span-2">
          <div className="flex-1 flex flex-col text-center items-center justify-center">
            <p className="text-4xl font-bold">
              {Math.round(currentWeather.temperature_2m) +
                currentWeatherUnits.temperature_2m}
            </p>
            <p className="text-2xl capitalize">{weatherCondition}</p>
          </div>
          <div className="flex-1 text-center">
            <div className="w-1/2 mx-auto">{weatherIcon}</div>
          </div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 flex flex-col items-center justify-center">
          <p className="font-semibold lg:text-xl">Precipitation</p>
          <p>
            {Math.round(currentWeather.precipitation) +
              currentWeatherUnits.precipitation}
          </p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 flex flex-col items-center justify-center">
          <p className="font-semibold lg:text-xl">Wind Speed</p>
          <p>
            {Math.round(currentWeather.wind_speed_10m) +
              currentWeatherUnits.wind_speed_10m}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
