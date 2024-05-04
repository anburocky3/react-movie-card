import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import MyNavbar from "./components/Navbar";


const App = () => {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    // Call the API
    async function callMovieApi() {
      const result = await fetch('/movieApi') // 15sec

      const moviesData = await result.json()

      // running some app.. 
      setMovieList(moviesData.results)
    }

    callMovieApi()
  }, [])



  return (
    <div>
      <MyNavbar />

      <main className="p-3">
        <div className="row">

          {movieList.map((movie) => {
            return <div className="col-4" key={movie.id}>
              <MovieCard title={movie.title} image={"https://image.tmdb.org/t/p/original/" + movie.poster_path} desc={movie.overview.substring(0, 150)} />
            </div>
          })}
        </div>

      </main>

    </div>
  )
}

export default App;