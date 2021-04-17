import React from "react";
import styled from "styled-components";

export default function Footer() {
  const StyledContainer = styled.div`
    position: fixed;

    width: 100%;
    height: 35px;
    padding: 10px;
    bottom: 0;
    left: 0;
    background-color: rgba(236, 88, 103, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    color: #000;
    p {
      margin: auto;
    }
  `;
  return (
    <StyledContainer>
      <p>
        2021 <span class="footer-span">&copy;</span> Made by Beddy
      </p>
      <p>powered by open-weather-map</p>
    </StyledContainer>
  );
}
