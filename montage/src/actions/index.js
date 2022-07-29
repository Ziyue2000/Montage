export const OpenLogin = visibility => {
    return {
        type: 'OpenLogin',
        payload: visibility
    };
}

export const OpenMovies = visibility => {
    return {
        type: 'OpenMovies',
        payload: visibility
    };
}

export const CloseMovies = visibility => {
    return {
        type: 'CloseMovies',
        payload: visibility
    };
}

export const OpenMoviesInfo = visibility => {
    return {
        type: 'OpenMoviesInfo',
        payload: visibility
    };
}

export const CloseMoviesInfo = visibility => {
    return {
        type: 'CloseMoviesInfo',
        payload: visibility
    };
}

export const OpenCoverPage = visibility => {
    return {
        type: 'OpenCoverPage',
        payload: visibility
    };
}

export const CloseCoverPage = visibility => {
    return {
        type: 'CloseCoverPage',
        payload: visibility
    };
}

export const handleOnChangeMovieTitle = input => {
    return {
        type: 'OnChangeMovieTitle',
        payload: input
    };
}

export const handleOnChangeMovieYear = input => {
    return {
        type: 'OnChangeMovieYear',
        payload: input
    };
}

export const handleOnChangeMovieDirector = input => {
    return {
        type: 'OnChangeMovieDirector',
        payload: input
    };
}

export const handleOnChangeMovieWriter = input => {
    return {
        type: 'OnChangeMovieWriter',
        payload: input
    };
}

export const handleOnChangeMovieGenre = input => {
    return {
        type: 'OnChangeMovieGenre',
        payload: input
    };
}

export const handleOnChangeMovieDescription = input => {
    return {
        type: 'OnChangeMovieDescription',
        payload: input
    };
}

export const handleOnChangeMovieId = input => {
    return {
        type: 'OnChangeMovieId',
        payload: input
    };
}

export const handleOnChangeMovieImage = input => {
    return {
        type: 'OnChangeMovieImage',
        payload: input
    };
}

export const handleOnChangeSearchMovieTitle = input => {
    return {
        type: 'OnChangeSearchMovieTitle',
        payload: input
    };
}

export const handleOnChangeSearchMovieYear = input => {
    return {
        type: 'OnChangeSearchMovieYear',
        payload: input
    };
}

export const handleOnChangeSearchMovieGenre = input => {
    return {
        type: 'OnChangeSearchMovieGenre',
        payload: input
    };
}

export const handleOnChangeSearchMovieRate = input => {
    return {
        type: 'OnChangeSearchMovieRate',
        payload: input
    };
}

export const getUserId = (id) => {
  return {
    type: 'getUserId',
    payload: id
  };
}

export const getUserData = (data) => {
  return {
    type: 'getUserData',
    payload: data
  };
}

export const addFavouriteMovie = (data) => {
    return {
      type: 'addFavouriteMovie',
      payload: data
    };
  }