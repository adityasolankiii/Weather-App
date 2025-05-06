import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import clear from "./assets/images/clear.png";
import clouds from "./assets/images/clouds.png";
import drizzle from "./assets/images/drizzle.png";
import humidity from "./assets/images/humidity.png";
import mist from "./assets/images/mist.png";
import rain from "./assets/images/rain.png";
import snow from "./assets/images/snow.png";
import wind from "./assets/images/wind.png";

export default function InfoBox({ weatherInfo }) {
  return weatherInfo != undefined ? (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              weatherInfo.weather === "Clear"
                ? clear
                : weatherInfo.weather === "Clouds"
                ? clouds
                : weatherInfo.weather === "Drizzle"
                ? drizzle
                : weatherInfo.weather === "Mist"
                ? mist
                : weatherInfo.weather === "Rain"
                ? rain
                : snow
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}>
              <p>Weather = {weatherInfo.weather}</p>
              <p>Temperature = {weatherInfo.temp}&deg;C</p>
              <p>Humidity = {weatherInfo.humidity}</p>
              <p>Min Temperature = {weatherInfo.minTemp}&deg;C</p>
              <p>Max Temperature = {weatherInfo.maxTemp}&deg;C</p>
              <p>
                The Weather can be describe as{" "}
                <i>{weatherInfo.weatherDescription}</i> and feels like{" "}
                {weatherInfo.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  ) : (
    <></>
  );
}
