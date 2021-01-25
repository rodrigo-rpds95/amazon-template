import { useState } from 'react'
import './MovieRow.css';

const MovieRow = ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);
    const [hiddenLeftArrow, setHiddenLeftArrow] = useState(false);
    const [hiddenRightArrow, setHiddenRightArrow] = useState(true);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x >= 0){
            x = 0;
            setHiddenLeftArrow(false);
        }
        setHiddenRightArrow(true);
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 308;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
            setHiddenRightArrow(false);
        }
        setHiddenLeftArrow(true);
        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" style={{display: hiddenLeftArrow ? 'block' : 'none'}} onClick={handleLeftArrow}>
            </div>
            <div className="movieRow--right" style={{display: hiddenRightArrow ? 'block' : 'none'}} onClick={handleRightArrow}>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                        marginLeft: scrollX,
                        width: items.results.length * 305
                    }}>

                    {items.results.length > 0 && items.results.map((item, key) =>{  

                        let description = item.overview;
                        let firstDate = new Date(item.first_air_date || item.release_date);

                        if(description.length > 150){
                            description = description.substring(0, 150) + '...';
                        }
                        
                        return (

                            <div className="movieRow--item" key={key}>
                                <div className="movieRow--content">
                                    <div className="movieRow--image">
                                        <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} alt={item.original_name} />
                                    </div>
                                    <div className="movieRow--desc">
                                        <div className="box-player">
                                            <a href="/">
                                                <div className="mini-player"></div>
                                                <div className="box-right">
                                                    <p>Reproduzir</p>
                                                    <div className="bar-time" href="/"></div>
                                                </div>
                                            </a>
                                        </div>
                                        <p className="name-movie">{item.original_name}</p>
                                        <p className="desc-movie">{description}</p>
                                        <p className="date-movie">{firstDate.getFullYear() || ''}</p>
                                    </div>
                                </div>
                            </div>
                    )})}
                </div>
            </div>
        </div>
    )

}

export default MovieRow;