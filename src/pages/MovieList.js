import { useEffect, useState } from "react"
import { Card } from "../components/Card"

export const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=cbac04e409db53e1dfb45cc9a9d7020d");
            const data = await response.json();
            setMovies(data.results);
        }
        fetchMovies();
    }, []);

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                    {movies.map((movie) => (
                        <Card />
                    ))}
                </div>
            </section>
        </main>
    )
}
