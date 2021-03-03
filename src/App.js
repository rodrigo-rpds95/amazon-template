import {useEffect, useState} from 'react'
import './App.css';
import Tmdb from './Tmdb';
import Header from './components/Header';
import Slide from './components/Slide';
import MovieRow from './components/MovieRow';

function App() {

  const [movieList, setMovieList] = useState([]);
  const slidesHome = [
    'https://www.w3schools.com/howto/img_snow_wide.jpg',
    'https://www.w3schools.com/howto/img_nature_wide.jpg',
    'https://www.w3schools.com/howto/img_mountains_wide.jpg',
  ];

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

      <Slide items={slidesHome} />

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

    </>
  );
}

export default App;
