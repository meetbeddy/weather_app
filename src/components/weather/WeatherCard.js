import React from "react";
import moment from "moment";
import styled from "styled-components";

const WeatherCard = (props) => {
  const { main, weather, name } = props;

  const Card = styled.div`
    display: flex;
    width: auto;
    height: auto;
    margin: auto;
    text-align: center;
    background-color: rgba(225, 225, 225, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    .city-name {
      width: 25%;
      height: 60px;
      margin: auto;
      padding: 5px;

      h1 {
        font-family: "Patrick Hand", cursive;
        font-size: 3em;
        letter-spacing: 4px;
        font-weight: 700;
        margin: auto;
      }
    }
    .details {
      width: 60%;
      display: block;
      margin: auto;
      font-size: 1.45em;
      letter-spacing: 2px;
      font-family: "Orbitron", sans-serif;
    }
    i {
      color: #ffff;
    }
    @media (max-width: 768px) {
      font-size: 0.8em;
      font-weight: 400;
    }
  `;

  return (
    <Card>
      {" "}
      <div className="city-name ">
        <h1>{name}</h1>
      </div>
      <div className="details">
        <p>{moment().format("llll")}</p>
        <i className={`owf owf-${weather[0].id} owf-5x`}></i>
        <h4>
          {Math.round(main.temp - 273.15)}
          {`\u00b0`}C
        </h4>
        <p>{weather[0].description}</p>
      </div>
    </Card>
  );
};

export default WeatherCard;
