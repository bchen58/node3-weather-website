const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia3VuY2hlbiIsImEiOiJjbGt0YWZ2bXQwOWRhM25tcWc2czA3NW1kIn0.w7rcAO6vB65Ro470jzmXoQ&limit=1'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try again.')     
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode