import axios from "axios";
export const conversionToLengthAndWidth = async (city) => {
    const weatherApiKey = "28159479b9347b0c2d0dbe3467b5a6da";
    try {
      const response = await axios(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${weatherApiKey}`);
      return response;
    } catch {
      throw new Error("Error fetching weather");
    }
  };
