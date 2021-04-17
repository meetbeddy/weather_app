import React from "react";
import moment from "moment";
import styled from "styled-components";

const DayCard = (props) => {
  const { temp, weather, date } = props;
  let newDate = new Date();
  const weekday = date * 1000;
  newDate.setTime(weekday);

  const StyledCard = styled.div`
    width: 150px;
    height: 200px;
    text-align: center;
    border: 2px solid black;
    padding: 2px;
    margin: 5px;
    color: #fff;
    background-color: #17183b;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    i {
      color: white;
    }
    @media (max-width: 768px) {
      min-width: 150px;
    }
  `;

  return (
    <StyledCard>
      <h4> {moment(newDate).format("dddd").substring(0, 3)} </h4>
      <i className={`owf owf-${weather[0].id} owf-3x`}></i>{" "}
      <p>
        {" "}
        {Math.round(temp.temp - 273.15)}
        {`\u00b0`}C{" "}
      </p>
      <p> {weather[0].description} </p>
    </StyledCard>
  );
};
export default DayCard;
