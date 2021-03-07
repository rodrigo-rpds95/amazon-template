import {useEffect, useState} from 'react'
import './App.css';
import Tmdb from './Tmdb';
import Header from './components/Header';
import Slide from './components/Slide';
import MovieRow from './components/MovieRow';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [slidesHomeTeste, setSlidesHome] = useState([]);
  const slidesHome = [
    'https://www.w3schools.com/howto/img_snow_wide.jpg',
    'https://www.w3schools.com/howto/img_nature_wide.jpg',
    'https://www.w3schools.com/howto/img_mountains_wide.jpg',
  ];

  useEffect(() => {

    const loadAll = async () => {

      let list = await Tmdb.getHomeList();
      setMovieList(list);


      let originals = list.filter(i => i.slug === 'originals');
      let slide1 = await Tmdb.getMovieInfo(originals[0].items.results[0].id, 'tv');
      let slide2 = await Tmdb.getMovieInfo(originals[0].items.results[1].id, 'tv');
      let slide3 = await Tmdb.getMovieInfo(originals[0].items.results[2].id, 'tv');

      setSlidesHome([slide1, slide2, slide3]);

    }

    loadAll();
  }, []);

  return (
    <>
    
      <Header />

      <Slide items={slidesHomeTeste} />

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

    </>
  );
}

export default App;
