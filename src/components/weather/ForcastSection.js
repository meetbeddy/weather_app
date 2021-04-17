import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import { Consumer } from "../../Context";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  text-align:center;
 
  
  .main{
    width:100%;
    height:45%;
    margin:10px;
  }
  .search{
    display:inline-flex;
    position:relative;
    width:100%;
    margin:5px;
    .search-container{
      display:inline-flex;
      width:100%;
      height: 40px;
      border: 1.5px solid rgba(0, 0, 0, 0.5);
      border-radius:5px;
      margin:5.5px;
    }
  
    input#search {
      width: 100%;
      height:35px;
      background:transparent;
      color: black;
      border:none;
      text-align:center;
      
      :focus{
        outline:none;
      }
    }
    i{
      padding:10px;
    }
  }
  .btn{
   display: inline-block;
   width: 12em;
   height:40px;
   padding: 0.46em;
   margin:auto;
   border: 0.1em solid rgb(32,39,55);
   border-radius: 0.7em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: #fff;
   text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
   background-color: #17183b;
   text-align: center;
   transition: all 0.15s;
  :hover{
     text-shadow: 0 0 2em rgba(255,255,255,1);
     background-color: transparent;
     color:#70C1B3;
    }
   
  }
  @media all and (max-width:30em){
     Button{
      display:block;
      margin:0.4em auto;
     }
    @media (max-width: 768px) {
      width: 100%;
     
    }
`;

class ForcastSection extends Component {
  state = {
    search: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  HandleClick = (dispatch, e) => {
    e.preventDefault();
    const { search } = this.state;
    console.log(this.state);
    dispatch({ type: "SEARCH_CITY", payload: search });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { weatherData, dispatch } = value;
          const { name, main, weather } = weatherData;

          if (name) {
            return (
              <StyledContainer>
                <div className="main">
                  <div className="search">
                    <div className="search-container">
                      <i className="material-icons"> search </i>{" "}
                      <input
                        id="search"
                        placeholder="Search Location"
                        type="search"
                        required
                        onChange={this.onChange}
                      />
                      <label className="search" htmlFor="search"></label>
                    </div>
                    <button
                      className="btn"
                      onClick={this.HandleClick.bind(this, dispatch)}
                    >
                      check forecast
                    </button>
                  </div>

                  <WeatherCard main={main} weather={weather} name={name} />
                </div>
              </StyledContainer>
            );
          } else {
            return <h1>loading</h1>;
          }
        }}
      </Consumer>
    );
  }
}
export default ForcastSection;
