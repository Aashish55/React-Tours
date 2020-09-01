import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import AppBar from "./Appbar/Appbar";
import SearchBar from "./UI/SearchBar/SearchBar";
import PlaceDescription from "./UI/PlaceDescription/PlaceDescription";
import panauti from "../images/panauti.jpg";
import adventure from "../images/adventure.jpg";
import data from "../Data/staticData.json";

const Homepage = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  width: 50%;
  height: 100vh;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: linear-gradient(134.73deg, #c54409 0%, #f6763c 98.01%);
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px 0px 0px 40px;
`;
const RecomendationText = styled.h4`
  text-align: left;
  margin: 0 3rem;
`;
const CenterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Destinations = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-grow: 1;
  width: 100%;
  overflow: auto;
`;

const Card = styled.div`
  height: 30rem;
  width: 22rem;
  margin: 1rem 0;
  background-color: white;
  border-radius: 3rem;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
`;
const PlaceName = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
  text-transform: uppercase;
  font-family: -apple-system;
  padding: 1rem 15rem;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  transform: translateY(1rem) rotate(-8deg);
  background-image: linear-gradient(to bottom right, #ffb900, #ff7730);
`;

class Home extends Component {
  state = {
    user: this.props.currentUser,
    cardClicked: false,
    places: data,
  };

  cardClickHandler = () => {
    this.setState({ cardClicked: true });
  };

  sendImage= name => {
    if(name==='Panauti'){
      return panauti;
    }else{
      return adventure
    }
  }

  render() {
    const { cardClicked, places } = this.state;
    console.log(places);
    return (
      <Homepage>
        <Main>
          <AppBar />
          <CenterRow>
            <SearchBar />
          </CenterRow>
          <RecomendationText>Our Recommendation</RecomendationText>
          <Destinations>
            {places.length > 0 ? (
              places.map((place) => {
                return (
                  <Card
                    key={place.name}
                    img={ this.sendImage(place.name)}
                    onClick={this.cardClickHandler}
                  >
                    <PlaceName>{place.name}</PlaceName>
                  </Card>
                );
              })
            ) : (
              <li>no data found</li>
            )}
          </Destinations>
        </Main>
        <Description>
          {cardClicked ? (
            <PlaceDescription />
          ) : (
            <Center>
              <h1>ExploreIT</h1>
            </Center>
          )}
        </Description>
      </Homepage>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Home);
