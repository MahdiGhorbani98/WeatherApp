const ConvertDescription = (des) => {
  switch (des) {
    //clouds section
    case "overcast_clouds":
      return "broken_clouds";

    //mist section
    case "Smoke":
    case "Haze":
    case "sand/_dust_whirls":
    case "fog":
    case "sand":
    case "dust":
    case "volcanic_ash":
    case "squalls":
    case "tornado":
      return "mist";

    //snow section
    case "light_snow":
    case "Heavy_snow	":
    case "Sleet":
    case "Light_shower_sleet":
    case "Shower_sleet":
    case "Rain_and_snow":
    case "Light_shower_snow":
    case "Shower_snow":
    case "Heavy_shower_snow":
      return "snow";

    //rain section
    case "light_rain":
    case "moderate_rain":
    case "heavy_intensity_rain":
    case "very_heavy_rain":
    case "extreme_rain":
    case "freezing_rain":
    case "light_intensity_shower_rain":
    case "heavy_intensity_shower_rain	":
    case "ragged_shower_rain":
      return "rain";

    //Thunderstorm section
    case "thunderstorm_with_light_rain":
    case "thunderstorm_with_heavy_rain":
    case "light_thunderstorm":
    case "heavy_thunderstorm":
    case "ragged_thunderstorm":
    case "thunderstorm_with_light_drizzle":
    case "thunderstorm_with_drizzle":
    case "thunderstorm_with_heavy_drizzle":
      return "thunderstorm";

    default:
      return des;
  }
};

export default ConvertDescription;
