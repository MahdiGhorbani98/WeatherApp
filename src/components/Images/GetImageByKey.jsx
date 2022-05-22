import rain from "../../assets/weather-background-Images/rain.jpg";
import mist from "../../assets/weather-background-Images/mist.jpg";
import shower_rain from "../../assets/weather-background-Images/shower_rain.jpg";
import snow from "../../assets/weather-background-Images/snow.jpg";
import thunderstorm from "../../assets/weather-background-Images/thunderstorm.jpg";
import scattered_clouds from "../../assets/weather-background-Images/scattered_clouds.jpg";
import few_clouds from "../../assets/weather-background-Images/few_clouds.jpg";
import clear_sky from "../../assets/weather-background-Images/clear_sky.jpg";
import broken_clouds from "../../assets/weather-background-Images/broken_clouds.jpg";

const images = {
  rain,
  mist,
  shower_rain,
  snow,
  thunderstorm,
  scattered_clouds,
  few_clouds,
  clear_sky,
  broken_clouds,
};

function GetImageByKey(key) {
  return images[key];
}

export default GetImageByKey;
