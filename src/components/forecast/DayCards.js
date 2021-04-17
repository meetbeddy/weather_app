import React, { Component } from "react";
import DayCard from "./DayCard";
import { Consumer } from "../../Context";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: inline-flex;
  @media (max-width: 768px) {
    // justify-content: space-between;
    width: 100%;
    margin: auto;
    overflow-y: hidden;
    overflow-x: auto;
  }
`;

class DayCards extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { forecastData } = value;

          if (forecastData.length > 0) {
            return (
              <StyledDiv>
                {forecastData[0].map((forecast) => (
                  <DayCard
                    key={forecast.dt}
                    date={forecast.dt}
                    weather={forecast.weather}
                    temp={forecast.main}
                  />
                ))}
              </StyledDiv>
            );
          }
        }}
      </Consumer>
    );
  }
}
export default DayCards;
