export const getCurrentForecast = (forecastData: any) => {
  const current = forecastData.current;

  const day = forecastData.forecast.forecastday[0].day;

  const astro = forecastData.forecast.forecastday[0].astro;

  return { ...current, ...day, ...astro };
};
