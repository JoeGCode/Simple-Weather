import { FaQuestionCircle } from "react-icons/fa";
import {
  WiCloudy,
  WiDaySunny,
  WiDust,
  WiFog,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const getWeatherCondition = (code) => {
  const conditions = {
    0: "clear sky",
    1: "cloudy",
    2: "cloudy",
    3: "cloudy",
    45: "fog",
    48: "fog",
    51: "rain",
    53: "rain",
    55: "rain",
    56: "rain",
    57: "rain",
    61: "rain",
    63: "rain",
    65: "rain",
    66: "rain",
    67: "rain",
    71: "snow",
    73: "snow",
    75: "snow",
    77: "snow",
    80: "rain",
    81: "rain",
    82: "rain",
    85: "snow",
    86: "snow",
    95: "thunderstorm",
    96: "thunderstorm",
    99: "thunderstorm",
  };
  return conditions[code] || "unknown";
};

export const getWeatherIcon = (weatherType) => {
  switch (weatherType) {
    case "clear sky":
      return <WiDaySunny className="text-yellow-400 h-full w-full" />;
    case "cloudy":
      return <WiCloudy className="text-gray-400 h-full w-full" />;
    case "rain":
      return <WiRain className="text-blue-400 h-full w-full" />;
    case "snow":
      return <WiSnow className="text-blue-200 h-full w-full" />;
    case "dust":
      return <WiDust className="text-orange-400 h-full w-full" />;
    case "thunderstorm":
      return <WiThunderstorm className="text-gray-600 h-full w-full" />;
    case "fog":
      return <WiFog className="text-gray-300 h-full w-full" />;
    default:
      return <FaQuestionCircle className="text-red-950 h-full w-full" />;
  }
};
