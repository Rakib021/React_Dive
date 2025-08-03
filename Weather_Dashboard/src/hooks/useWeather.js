import { useEffect, useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    console.log("Calling API with coords:", latitude, longitude);

    try {
      setLoading({
        state: true,
        message: "Fetching weather data...",
      });

      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      console.log("API Key:", apiKey);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`Error fetching weather: ${response.status}`);
      }

      const data = await response.json();
      console.log("Weather data:", data);

      setWeatherData({
        location: data.name,
        climate: data.weather?.[0]?.main,
        temperature: data.main?.temp,
        maxTemperature: data.main?.temp_max,
        minTemperature: data.main?.temp_min,
        humidity: data.main?.humidity,
        cloudPercentage: data.clouds?.all,
        wind: data.wind?.speed,
        time: data.dt,
        longitude,
        latitude,
      });
    } catch (err) {
      console.error("Weather API error:", err);
      setError(err);
    } finally {
      setLoading({
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      state: true,
      message: "Finding location...",
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      },
      (geoError) => {
        console.error("Geolocation error:", geoError);
        setError(geoError);
        setLoading({ state: false, message: "" });
      }
    );
  }, []);

  return {
    weatherData,
    error,
    loading,
  };
};

export default useWeather;
