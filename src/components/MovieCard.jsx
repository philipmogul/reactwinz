function MovieCard({ movie }) {

    /*
    GOOD PRACTISE IS TO PUT ALL COMPONENTS IN A SEPARATE FOLDER AND EXPORT THEM 
    */


    function movieClickHandler() {
        alert(`You clicked on ${movie.title}`);
        // Here you can add more functionality, like navigating to a movie details page

    }

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={`${movie.title}`} />
      <div className="movie-overlay">
        <button className="fav-button" onClick={movieClickHandler}>
            <span role="img" aria-label="favorite">❤️</span>
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

// To access this component in another file, we need to export it
export default MovieCard;
