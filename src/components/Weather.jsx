import React from "react";
import { useParams } from "react-router-dom";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Weather({ destination }) {
  const [position, setPosition] = React.useState({
    latitude: "",
    longitude: "",
  });
  const [weather, setWeather] = React.useState({
    temperature: "",
    feelsLike: "",
    uvIndex: "",
    timezone: "",
    precipitationProbability: "",
  });

  const { latitude, longitude } = position;

  React.useEffect(() => {
    async function getCoordinates() {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${destination.capitalCity}&format=json&limit=1
        `
        );
        const data = await response.json();
        setPosition({
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon),
        });
      } catch (err) {
        // console.log(err);
      }
    }
    getCoordinates();
  }, [destination]);

  React.useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature,precipitation_probability,uv_index&current_weather=true`
        );
        const data = await response.json();
        // console.log(data);
        const { current_weather, hourly, timezone } = data;
        setWeather({
          temperature: current_weather.temperature,
          uvIndex: hourly.uv_index[0],
          precipitationProbability: hourly.precipitation_probability[0],
          timezone: timezone,
        });
      } catch (err) {
        // console.log(err);
      }
    }
    getWeather();
  }, [latitude, longitude]);

  return (
    <div className="p-4 bg-yellow-50 dark:bg-zinc-800 mt-4 rounded-lg">
      <h4 className="font-bold text-2xl mb-4">
        Weather <TiWeatherPartlySunny className="inline-block -mt-2" />
      </h4>
      <p>
        <span className="font-semibold text-gray-500 dark:text-gray-400">
          Temperature:
        </span>{" "}
        {weather.temperature}&#8451;
      </p>
      <p>
        <span className="font-semibold text-gray-500 dark:text-gray-400">
          UV Index:
        </span>{" "}
        {weather.uvIndex}
      </p>
      <p>
        <span className="font-semibold text-gray-500 dark:text-gray-400">
          Probability of precipitation:
        </span>{" "}
        {weather.precipitationProbability}%
      </p>
    </div>
  );
}

export default Weather;
