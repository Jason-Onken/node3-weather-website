const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=9352f66688d8501bb8571227d28e7a18&query=${latitude},${longitude}&units=f`

  request({ url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, {
        actualTemp: body.current.temperature,
        feelsLike: body.current.feelslike,
        condition: body.current.weather_descriptions[0]
      })
    }
  })
}

module.exports = forecast