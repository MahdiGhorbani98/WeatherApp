import rain from "../assets/weather-background-images/rain.jpg";
import mist from "../assets/weather-background-images/mist.jpg";
import shower_rain from "../assets/weather-background-images/shower_rain.jpg";
import snow from "../assets/weather-background-images/snow.jpg";
import thunderstorm from "../assets/weather-background-images/thunderstorm.jpg";
import scattered_clouds from "../assets/weather-background-images/scattered_clouds.jpg";
import few_clouds from "../assets/weather-background-images/few_clouds.jpg";
import clear_sky from "../assets/weather-background-images/clear_sky.jpg";
import broken_clouds from "../assets/weather-background-images/broken_clouds.jpg";

const images = {
  thunderstorm,
  rain,
  shower_rain,
  scattered_clouds,
  broken_clouds,
  few_clouds,
  clear_sky,
  mist,
  snow,
};

function GetImageByKey(key) {
  return images[key];
}

export default GetImageByKey;
