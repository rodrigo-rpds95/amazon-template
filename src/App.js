import {useEffect, useState} from 'react'
import './App.css';
import Tmdb from './Tmdb';
import Header from './components/Header';
import MovieRow from './components/MovieRow';

function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {

    const loadAll = async () => {

      let list = await Tmdb.getHomeList();
      setMovieList(list);

    }

    loadAll();
  }, []);

  return (
    <>
    
      <Header />

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

    </>
  );
}

export default App;
