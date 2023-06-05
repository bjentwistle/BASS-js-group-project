// import React, {useState, useEffect} from 'react';
// import Header from '../components/Header';
import MoviePoster from '../components/MoviePoster';
import MovieForm from '../components/MovieForm';
// import Footer from '../components/Footer';
// import LeaderBoard from '../components/LeaderBoard';
// import { getUsers, postUser, putUser } from '../services/UsersService';
// import UserForm from '../components/UserForm';
// import CongratulationsPopupModal from '../components/CongratulationsPopUpModal';
// import GameOverPopupModal from '../components/GameOverPopUpModal';


const GameContainer = ({movies, targetMovie, users, updateUserStats}) => {




    return (
        <>
        <h1>This is the GameContainer</h1>
        {/* <Header /> */}
        {/* <UserForm createUser={createUser}/> */}
        <MoviePoster targetMovie={targetMovie}/>
        <MovieForm updateUserStats={updateUserStats} user={users[0]}/>
        {/* <LeaderBoard users={users}/> */}
        {/* <Footer /> */}
        </>
    );
}

export default GameContainer;