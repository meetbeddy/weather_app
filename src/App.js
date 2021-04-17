import React, { Component } from "react";
import DayCards from "./components/forecast/DayCards";
import ForcastSection from "./components/weather/ForcastSection";
import Footer from "./components/footer/Footer";
import { Provider } from "./Context";
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div>
            <h2>Weather Cast</h2>
          </div>

          <ForcastSection />

          <DayCards />
          <div className="outer">
            {" "}
            <Footer />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
