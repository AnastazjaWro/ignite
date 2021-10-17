import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import nogame from '../img/nogame.png';
import { useHistory } from "react-router";
import { smallImage } from "../utils";
import { useSelector } from "react-redux";
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
// Star Images
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';


const GameDetail = ({pathId}) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if(element.classList.contains("shadow")){
      document.body.style.overflow = "auto";
      history.push('/');
    }
  }
  // GET STAR
  const getRating = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for(let i = 1; i <= 5; i++){
      if(i <= rating){
        stars.push(<img alt='star' key={i} src={starFull}></img>);
      }else{
        stars.push(<img alt='star' key={i} src={starEmpty}></img>)
      }
    }
    return stars;
  }

  // GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch(platform){
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default: 
        return gamepad;
    }
  }

  const {screen, game, isLoading} = useSelector(state => state.details);
  let image;
  if(!game.background_image){
    image = nogame;
  } else {
    image = game.background_image;
  }
  return(
    <>
    {!isLoading && (
    <CardShadow className="shadow" onClick={exitDetailHandler}>
      <Detail layoutId={pathId}>
        <Stats>
          <div className="rating">
            <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
            <p>Rating: {game.rating}</p>
            {getRating()}
          </div>
          <Info>
            <h3>Platforms:</h3>
            <Platforms>
              {game.platforms.map((data) => (
                <img key={data.platform.id}  src={getPlatform(data.platform.name)} alt={data.platform.name} ></img>
              ))}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <motion.img
            layoutId={`image ${pathId}`} 
            src={smallImage(image, 1280)}
            alt="img"
          />
        </Media>
        <Description>
          <p>{game.description_raw}</p>
        </Description>
        <div className="gallery">
          {screen.results.map((screen)=>(
            <img src={smallImage(screen.image, 1280)} key={screen.id} alt="galery img" />
          ))}
        </div>
      </Detail>
    </CardShadow>
    )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;