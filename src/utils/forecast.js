const request = require('request')
const forecast = (latitude, longitude, callback) => {
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/{'+ longitude +'},{'+ latitude+'}.json?access_token=pk.eyJ1Ijoia3VuY2hlbiIsImEiOiJjbGt0YWZ2bXQwOWRhM25tcWc2czA3NW1kIn0.w7rcAO6vB65Ro470jzmXoQ&limit=1'
    const url = 'http://api.weatherstack.com/current?access_key=3f3f7d92915a2d200504b52f11d6c959&units=f&query=' + latitude + ',' + longitude
    request({url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to service!')
        } else if (body.error){
            callback('Ubable to find location')
        } else {
            callback(undefined,body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degree out. It feels like ' + body.current.feelslike + ' degree out')
        }
    })    
}

module.exports = forecast