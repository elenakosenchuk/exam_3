"use strict";

var OPENWEATHER_KEY = '5769fc8a3560ba29d3d5b6fadc78fe0c';
var time_mixin = {
  methods: {
    converttime: function converttime(sec) {
      var dateobj = new Date(sec * 1000);
      return "".concat(dateobj.toLocaleTimeString(), " ").concat(dateobj.toLocaleDateString());
    }
  }
};
Vue.component('oneoffive', {
  mixins: [time_mixin],
  props: ['forecast', 'city'],
  template: '#oneoffive'
});
Vue.component('weather_icon', {
  props: ['curweather'],
  methods: {
    getclass: function getclass(n) {
      var weather = {
        "Thunderstorm": "wi-storm-showers",
        "Drizzle": "wi-sprinkle",
        "Rain": "wi-showers",
        "Snow": "wi-snow",
        "Mist": "wi-fog",
        "Smoke": "wi-smoke",
        "Haze": "wi-smog",
        "Dust": "wi-dust",
        "Fog": "wi-fog",
        "Sand": "wi-sandstorm",
        "Ash": "wi-volcano",
        "Squall": "wi-storm-showers",
        "Tornado": "wi-tornado",
        "Clear": "wi-day-sunny",
        "Clouds": "wi-cloudy"
      };
      return 'wi ' + weather[n];
    }
  },
  template: '#weather_icon'
});
Vue.component('oneofthree', {
  mixins: [time_mixin],
  props: ['forecast', 'city'],
  template: '#oneofthree'
});
Vue.component('currentweather', {
  props: ['forecast'],
  template: '#currentweather'
});
Vue.component('temperature', {
  props: ['temp'],
  methods: {
    f2c: function f2c(deg) {
      return Math.round(deg);
    }
  },
  template: '#temperature'
});
var app = new Vue({
  el: '#app',
  data: {
    activeTab: 1,
    q: 'Mykolaiv',
    currentForecast: {
      "coord": {
        "lon": 23.9852,
        "lat": 49.5237
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }],
      "base": "stations",
      "main": {
        "temp": 1.2,
        "feels_like": -0.85,
        "temp_min": 0.77,
        "temp_max": 1.2,
        "pressure": 1024,
        "humidity": 61,
        "sea_level": 1024,
        "grnd_level": 988
      },
      "visibility": 10000,
      "wind": {
        "speed": 1.83,
        "deg": 218,
        "gust": 2.82
      },
      "clouds": {
        "all": 34
      },
      "dt": 1642331825,
      "sys": {
        "type": 1,
        "id": 8909,
        "country": "UA",
        "sunrise": 1642313646,
        "sunset": 1642344777
      },
      "timezone": 7200,
      "id": 700568,
      "name": "Mykolaiv",
      "cod": 200
    },
    fiveDaysForecast: {
      "cod": "200",
      "message": 0,
      "cnt": 5,
      "list": [{
        "dt": 1642345200,
        "main": {
          "temp": 1.09,
          "feels_like": -0.51,
          "temp_min": -1.13,
          "temp_max": 1.09,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 985,
          "humidity": 68,
          "temp_kf": 2.22
        },
        "weather": [{
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }],
        "clouds": {
          "all": 57
        },
        "wind": {
          "speed": 1.5,
          "deg": 169,
          "gust": 1.79
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-01-16 15:00:00"
      }, {
        "dt": 1642356000,
        "main": {
          "temp": 0.21,
          "feels_like": -2.41,
          "temp_min": -0.78,
          "temp_max": 0.21,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 984,
          "humidity": 75,
          "temp_kf": 0.99
        },
        "weather": [{
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }],
        "clouds": {
          "all": 78
        },
        "wind": {
          "speed": 2.17,
          "deg": 227,
          "gust": 4.74
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-01-16 18:00:00"
      }, {
        "dt": 1642366800,
        "main": {
          "temp": -1.5,
          "feels_like": -5.4,
          "temp_min": -1.5,
          "temp_max": -1.5,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 983,
          "humidity": 78,
          "temp_kf": 0
        },
        "weather": [{
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.11,
          "deg": 273,
          "gust": 10.63
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-01-16 21:00:00"
      }, {
        "dt": 1642377600,
        "main": {
          "temp": -0.48,
          "feels_like": -6.19,
          "temp_min": -0.48,
          "temp_max": -0.48,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 982,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [{
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 6.27,
          "deg": 254,
          "gust": 14.74
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-01-17 00:00:00"
      }, {
        "dt": 1642388400,
        "main": {
          "temp": 0.15,
          "feels_like": -6.2,
          "temp_min": 0.15,
          "temp_max": 0.15,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 980,
          "humidity": 71,
          "temp_kf": 0
        },
        "weather": [{
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 8.18,
          "deg": 260,
          "gust": 16.09
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-01-17 03:00:00"
      }],
      "city": {
        "id": 700568,
        "name": "Mykolaiv",
        "coord": {
          "lat": 49.5237,
          "lon": 23.9852
        },
        "country": "UA",
        "population": 14251,
        "timezone": 7200,
        "sunrise": 1642313646,
        "sunset": 1642344777
      }
    },
    threeDaysForecast: {
      "cod": "200",
      "message": 0,
      "cnt": 3,
      "list": [{
        "dt": 1642345200,
        "main": {
          "temp": 1.2,
          "feels_like": -0.39,
          "temp_min": -1.13,
          "temp_max": 1.2,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 985,
          "humidity": 81,
          "temp_kf": 2.33
        },
        "weather": [{
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }],
        "clouds": {
          "all": 94
        },
        "wind": {
          "speed": 1.5,
          "deg": 169,
          "gust": 1.79
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-01-16 15:00:00"
      }, {
        "dt": 1642356000,
        "main": {
          "temp": 0.54,
          "feels_like": -2.03,
          "temp_min": -0.78,
          "temp_max": 0.54,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 984,
          "humidity": 82,
          "temp_kf": 1.32
        },
        "weather": [{
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }],
        "clouds": {
          "all": 95
        },
        "wind": {
          "speed": 2.17,
          "deg": 227,
          "gust": 4.74
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-01-16 18:00:00"
      }, {
        "dt": 1642366800,
        "main": {
          "temp": -0.6,
          "feels_like": -4.32,
          "temp_min": -1.5,
          "temp_max": -0.6,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 983,
          "humidity": 79,
          "temp_kf": 0.9
        },
        "weather": [{
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }],
        "clouds": {
          "all": 98
        },
        "wind": {
          "speed": 3.11,
          "deg": 273,
          "gust": 10.63
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-01-16 21:00:00"
      }],
      "city": {
        "id": 700568,
        "name": "Mykolaiv",
        "coord": {
          "lat": 49.5237,
          "lon": 23.9852
        },
        "country": "UA",
        "population": 14251,
        "timezone": 7200,
        "sunrise": 1642313646,
        "sunset": 1642344777
      }
    }
  },
  methods: {
    changeActiveTab: function changeActiveTab(num) {
      this.activeTab = num;
    },
    searchCity: function searchCity() {
      var _this = this;

      var url = "http://api.openweathermap.org/data/2.5/weather?q=".concat(this.q, "&units=metric&APPID=").concat(OPENWEATHER_KEY);
      axios.get(url).then(function (response) {
        _this.currentForecast = response.data;
      })["catch"](function (response) {
        _this.q = 'Mykolaiv';
      });
      var url3 = "http://api.openweathermap.org/data/2.5/forecast?q=".concat(this.q, "&units=metric&APPID=").concat(OPENWEATHER_KEY, "&cnt=3");
      axios.get(url3).then(function (response) {
        _this.threeDaysForecast = response.data;
      })["catch"](function (response) {
        _this.q = 'Mykolaiv';
      });
      var url5 = "http://api.openweathermap.org/data/2.5/forecast?q=".concat(this.q, "&units=metric&APPID=").concat(OPENWEATHER_KEY, "&cnt=5");
      axios.get(url5).then(function (response) {
        _this.fiveDaysForecast = response.data;
      })["catch"](function (response) {
        _this.q = 'Mykolaiv';
      });
    }
  }
});