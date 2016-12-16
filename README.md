# SkillsTest

## Installation
- `cd WeatherSwag && npm install`
- `cd WeatherExpress && npm install`

## Starting either application
- In the app's directory, run `npm start`

## WeatherSwag vs WeatherExpress
Upon reflection, I realized it was a poor choice to go with technologies that I am unfamiliar with for this challenge.

I spent no more than 6 hours working on WeatherSwag with two new technologies to me, Swagger and Hapi.

To show the difference between working with new technologies and those that I'm well versed in, I chose to create WeatherExpress using Express, Webpack, Babel, and React. 6 hours was spent working on WeatherExpress.

## APIs exposed
### WeatherSwag
Paths:

GET /weather/cities?query=:city name:

Response
```
{
  items: [
    {
      name: string
      zip: string
    },
    ...
  ]
}
```

GET /weather/cities/:zip:

Response
```
{
  data: {
    city: string
    zip: string
    temp: {
      value: number
      units: string (°F or °C)
      description: string
    }
  }
}
```

### WeatherExpress
Paths:

GET /cities?q=:city name:

Response
```
{
  "items":
  [
    {
      "name": "San Jose",
      "zip": "95126",
      "weather": {
        "temp": {
          "value": 54,
          "units": "°F"
        },
        "description": "Partly Cloudy"
      }
    },
    ...
  ]
}
```

GET /cities/:zip:

Response
```
{
  "data":
  {
    "name": "San Jose",
    "zip": "95126",
    "weather": {
      "temp": {
        "value": 54,
        "units": "°F"
      },
      "description": "Partly Cloudy"
    }
  }
}
```
