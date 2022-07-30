import "./style/movies.css"
import {getMoviesAsync, getMovieAsync}  from '../reducers/movies/thunks';
import {useSelector, useDispatch} from 'react-redux';
import React, { useEffect } from 'react';
import {getCommentsAsync} from "../reducers/comments/thunks";
import {useNavigate} from 'react-router-dom';
import Search from "./Search";

export default function Movies() {
    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
      dispatch(getMoviesAsync());
    }, []);
    const jumpToMovieInfo = () => {
        navigate('/MovieInfo');
    }

    let a = movies.map((movie, index) => (
        <div className="MovieCard" onClick={() => {jumpToMovieInfo(); dispatch(getMovieAsync(movie.movieId)); dispatch(getCommentsAsync(movie.movieId));}}>

            <img className = "MovieCardPoster" src = {movie.imageData} alt={movie.MovieTitle}/>
            <p className = "MovieCardTitle">{movie.MovieTitle}</p>
        </div>
    ));
    return (
        <div className = "Movies" >
            <Search/>
            {a}
        </div>
    )
}
