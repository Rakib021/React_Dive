import React from "react";
import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import { WeatherProvider } from "./provider";

export default function App() {
  return (
    <WeatherProvider>
    <div className="grid place-items-center h-screen">
      <Header />

      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
    </WeatherProvider>
  );
}
