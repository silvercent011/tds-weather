export const getActualDay = (forecastData: any) => {
  const dawn = forecastData.forecast.forecastDay.hour[3];

  const morning = forecastData.forecast.forecastDay.hour[9];

  const afternoon = forecastData.forecast.forecastDay.hour[15];

  const night = forecastData.forecast.forecastDay.hour[21];

  return { dawn, morning, afternoon, night };
};
