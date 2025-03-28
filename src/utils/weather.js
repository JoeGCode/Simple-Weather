import {
  BsCloudDrizzle,
  BsCloudRainHeavy,
  BsCloudSnow,
  BsQuestionCircle,
} from "react-icons/bs";
import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDayShowers,
  WiDaySleet,
  WiDaySnow,
  WiDaySunny,
  WiFog,
  WiNightAltCloudy,
  WiNightAltShowers,
  WiNightAltSleet,
  WiNightAltSnow,
  WiNightClear,
  WiRain,
  WiRainMix,
  WiShowers,
  WiSleet,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

export const getWeatherDescription = (code) => {
  const descriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };
  return descriptions[code] || "Unknown weather condition";
};

export const getWeatherIcon = (code, isDay = true) => {
  switch (code) {
    case 0:
      return isDay ? WiDaySunny : WiNightClear;
    case 1:
      return isDay ? WiDayCloudy : WiNightAltCloudy;
    case 2:
      return WiCloud;
    case 3:
      return WiCloudy;
    case 45:
    case 48:
      return WiFog;
    case 51:
    case 53:
    case 55:
      return BsCloudDrizzle;
    case 56:
    case 57:
      return WiSleet;
    case 61:
      return isDay ? WiDayShowers : WiNightAltShowers;
    case 63:
      return WiRain;
    case 65:
      return BsCloudRainHeavy;
    case 66:
    case 67:
      return WiRainMix;
    case 71:
      return isDay ? WiDaySnow : WiNightAltSnow;
    case 73:
      return WiSnow;
    case 75:
      return BsCloudSnow;
    case 77:
      return WiSnow;
    case 80:
      return WiShowers;
    case 81:
      return WiShowers;
    case 82:
      return WiThunderstorm;
    case 85:
      return isDay ? WiDaySleet : WiNightAltSleet;
    case 86:
      return WiSleet;
    case 95:
      return WiThunderstorm;
    case 96:
    case 99:
      return WiThunderstorm;
    default:
      return BsQuestionCircle;
  }
};

// 0	Clear sky
// 1, 2, 3	Mainly clear, partly cloudy, and overcast
// 45, 48	Fog and depositing rime fog
// 51, 53, 55	Drizzle: Light, moderate, and dense intensity
// 56, 57	Freezing Drizzle: Light and dense intensity
// 61, 63, 65	Rain: Slight, moderate and heavy intensity
// 66, 67	Freezing Rain: Light and heavy intensity
// 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
// 77	Snow grains
// 80, 81, 82	Rain showers: Slight, moderate, and violent
// 85, 86	Snow showers slight and heavy
// 95	Thunderstorm: Slight or moderate
// 96, 99	Thunderstorm with slight and heavy hail
