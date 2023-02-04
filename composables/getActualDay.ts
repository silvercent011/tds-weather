export const getActualDay = (forecastData: any) => {
  const dawn = forecastData.forecast.forecastday[0].hour[3];

  const morning = forecastData.forecast.forecastday[0].hour[9];

  const afternoon = forecastData.forecast.forecastday[0].hour[15];

  const night = forecastData.forecast.forecastday[0].hour[21];

  return { dawn, morning, afternoon, night };
};
