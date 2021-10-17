import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesActions';
import Game from '../components/Game';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import GameDetail from '../components/GameDetails';
import { useLocation } from 'react-router-dom';
import {fadeIn} from '../animations';

const Home = () => {
  const location  = useLocation();
  const pathId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const {popular, upcoming, newGames, searched} = useSelector(state => state.games);
  return(
    <GameList variants={fadeIn} initial='hidden' animate='show'>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId}/>}
        </AnimatePresence>
        {searched.length ? (
        <div className="searched">
        <h2>Searched List</h2>
        <Games>
          {searched.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))}
        </Games>
        </div>
        ):(
          ""
        )}
        <h2>UpComming List</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>popular List</h2>
        <Games>
          {popular.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>newGames List</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))}
          </Games>
      </AnimateSharedLayout>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;