const request = require("request");
const forecast = (latitude, longtitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=ccb3cb3142b80f2867b103f411e5b55d&query=" +
    latitude +
    "," +
    longtitude +
    "&units=f";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current["temperature"] +
          " degrees out. But it feels like " +
          body.current["feelslike"] +
          " degrees. The humidity is " +
          body.current["humidity"] +
          "%."
      );
    }
  });
};
module.exports = forecast;
