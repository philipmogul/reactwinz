import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function HomeMain() {

    // This is a simple home page component
    // Js codes and functions can be added here

    // const links = [];

    const movies = [
        { id: 1, title: "Inception", release_date: "2010" },   
        { id: 2, title: "The Matrix", release_date: "1999" },
        { id: 3, title: "Interstellar", release_date: "2014" }, 
        { id: 4, title: "The Dark Knight", release_date: "2008" }
    ];

    const handleSearch = () => {};

  return (
    <div className="home-page">
      <NavBar />
      <h1>Welcome to the Home Page</h1><hr />
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Search for movies..." className="search-input" />
          <button type="submit" className="search-button">Search</button>
        </form>
      <hr />
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

// Exporting the HomePage component to be used in other files
export default HomeMain;