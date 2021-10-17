import React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailAction";
import { Link } from "react-router-dom";
import nogame from '../img/nogame.png';
import { smallImage } from "../utils";
import { popUp } from "../animations";

const Game = ({id,name, released, image}) => {
  const stringPathId = id.toString();
  if(!image){
    image = nogame;
  }
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  };
  return(
    <StyledGame variants={popUp} initial='hidden' animate='show' layoutId={stringPathId} onClick={loadDetailsHandler}>
      <Link to={`/games/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        {image && (
          <motion.img
            layoutId={`image ${stringPathId}`}
            src={smallImage(image, 640)}
            alt={name}
          />
        )}
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0,0,0,0.1);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img{
    width: 100%;
  }
`;
export default Game;