import React, { useEffect } from 'react';
import GameDetail from '../components/GameDetail';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesActions';

// components
import Game from '../components/Game';

//styling and animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Home = () => {
	//get current loaction
	const location = useLocation();
	const pathId = location.pathname.split('/')[2];

	//fetch games
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);
	//get the data back
	const { popular, newGames, upcoming, isLoading, searched } = useSelector(
		(state) => state.games,
	);

	return (
		<>
			{!isLoading ? (
				<GameList>
					<AnimateSharedLayout type="crossfade">
						<AnimatePresence>
							{pathId && <GameDetail pathId={pathId} />}
						</AnimatePresence>
						{searched.length ? (
							<div className="searched-games">
								<Games>
									{searched.map((game) => (
										<Game
											name={game.name}
											released={game.released}
											id={game.id}
											image={game.background_image}
											key={game.id}
										/>
									))}
								</Games>
							</div>
						) : (
							''
						)}
						<h2>Upcoming Games</h2>
						<Games>
							{upcoming.map((game) => (
								<Game
									name={game.name}
									released={game.released}
									id={game.id}
									image={game.background_image}
									key={game.id}
								/>
							))}
						</Games>
						<h2>Popular Games</h2>
						<Games>
							{popular.map((game) => (
								<Game
									name={game.name}
									released={game.released}
									id={game.id}
									image={game.background_image}
									key={game.id}
								/>
							))}
						</Games>
						<h2>New Games</h2>
						<Games>
							{newGames.map((game) => (
								<Game
									name={game.name}
									released={game.released}
									id={game.id}
									image={game.background_image}
									key={game.id}
								/>
							))}
						</Games>
					</AnimateSharedLayout>
				</GameList>
			) : (
				<StyledSpan>Loading...</StyledSpan>
			)}
		</>
	);
};

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

const StyledSpan = styled.span`
	position: absolute;
	position: fixed;
	top: 50%;
	left: 50%;
	color: black;
	transform: translate(-50%, -50%);
`;

export default Home;
