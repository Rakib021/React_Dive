import { weatherContext } from "../contexts"
import { useWeather } from "../hooks"

export default function WeatherProvider({children }) {
  const {weatherData,loading,error} = useWeather();
  return (
   <weatherContext.Provider value={{weatherData,loading,error}}>
    {children}
   </weatherContext.Provider>
  )
}
