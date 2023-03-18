import Seo from "@/components/Seo";
import Link from "next/link";
import { useEffect, useState } from "react";

const API_KEY = "6cae8c47cd0312401fd7ff437f1ce358";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      );
      const { results } = await response.json();
      console.log(results);
      setMovies(results);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              {movie.original_title}
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
