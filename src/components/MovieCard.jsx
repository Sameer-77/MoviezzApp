import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id);

    // Function to handle click on the movie card (opens Google search)
    const handleSearchClick = (movieName) => {
        const searchQuery = encodeURIComponent(movieName);
        window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
    };

    // Function to handle favorite button click
    function onFavoriteClick(e) {
        e.stopPropagation();  // Prevent click event from bubbling up to the movie card
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie);
    }

    return (
        <div
            className="movie-card"
            onClick={() => handleSearchClick(movie.title)}  // Added search functionality
        >
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default MovieCard;
