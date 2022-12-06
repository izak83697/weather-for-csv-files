import axios from "axios";
export const weather = async (lat,lon) => {
    const weatherApiKey = "28159479b9347b0c2d0dbe3467b5a6da";
    try {
      const response = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${"metric"}&appid=${weatherApiKey}`);
      return response;
    } catch {
      throw new Error("Error fetching weather");
    }
  };