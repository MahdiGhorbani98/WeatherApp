const ConvertDescription = (des) => {
  switch (des) {
    //clouds section
    case "overcast_clouds":
      return "broken_clouds";

    //mist section
    case "Smoke":
      return "mist";

    case "Haze":
      return "mist";

    case "sand/_dust_whirls":
      return "mist";

    case "fog":
      return "mist";

    case "sand":
      return "mist";

    case "dust":
      return "mist";

    case "volcanic_ash":
      return "mist";

    case "squalls":
      return "mist";

    case "tornado":
      return "mist";

    //snow section
    case "light_snow":
      return "snow";

    case "Heavy_snow	":
      return "snow";

    case "Sleet":
      return "snow";

    case "Light_shower_sleet":
      return "snow";

    case "Shower_sleet":
      return "snow";

    case "Rain_and_snow":
      return "snow";

    case "Light_shower_snow":
      return "snow";

    case "Shower_snow":
      return "snow";

    case "Heavy_shower_snow":
      return "snow";

    //rain section
    case "light_rain":
      return "rain";

    case "moderate_rain":
      return "rain";

    case "heavy_intensity_rain":
      return "rain";

    case "very_heavy_rain":
      return "rain";

    case "extreme_rain":
      return "rain";

    case "freezing_rain":
      return "rain";

    case "light_intensity_shower_rain":
      return "rain";

    case "heavy_intensity_shower_rain	":
      return "rain";

    case "ragged_shower_rain":
      return "rain";

    //Thunderstorm section
    case "thunderstorm_with_light_rain":
      return "thunderstorm";

    case "thunderstorm_with_heavy_rain":
      return "thunderstorm";

    case "light_thunderstorm":
      return "thunderstorm";

    case "heavy_thunderstorm":
      return "thunderstorm";

    case "ragged_thunderstorm":
      return "thunderstorm";

    case "thunderstorm_with_light_drizzle":
      return "thunderstorm";

    case "thunderstorm_with_drizzle":
      return "thunderstorm";

    case "thunderstorm_with_heavy_drizzle":
      return "thunderstorm";

    default:
      return des;
  }
};

export default ConvertDescription;
