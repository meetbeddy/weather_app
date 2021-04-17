import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SEARCH_CITY":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    weatherData: {
      name: "",
      main: {},
      weather: [],
    },
    forecastData: [],
    currentLocation: "",
    search: "",
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  getforecast = async () => {
    let location =
      this.state.search.length > 1
        ? this.state.search
        : this.state.currentLocation;
    const response = await fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${location}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      }
    );
    const forecast = await fetch(
      `https://community-open-weather-map.p.rapidapi.com/forecast?q=${location}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      }
    );

    const res = await response.json();
    const forecastRes = await forecast.json();

    const filteredForecast = forecastRes.list.filter((reading) => {
      return reading.dt_txt.includes("18:00:00");
    });

    this.setState({
      weatherData: {
        name: res.name,
        main: res.main,
        weather: res.weather,
      },
      forecastData: [filteredForecast],
    });
  };

  setCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      this.getCity(longitude, latitude);
    });
  };

  getCity = async (latitude, longitude) => {
    const res = await fetch(
      `https://us1.locationiq.com/v1/reverse.php?key=607385774bafbe&lat=${latitude}&lon=${longitude}&format=json`
    );
    const resp = await res.json();
    const {
      address: { state },
    } = resp;
    this.setState({ currentLocation: state }, () => {
      this.getforecast();
    });
  };
  load;

  componentDidMount() {
    this.setCurrentLocation();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.getforecast();
    }
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
