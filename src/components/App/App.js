import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { animeArrayDataThunk } from '../../slice/animeArrayDataFetchSlice';
import './App.scss';


const tg = window.Telegram.WebApp;


function App() {
  const data = useSelector(state => state.animeArrayData.animeArrayData);
  const dispatch = useDispatch();

  // const [trailerFlag, setTrailerFlag] = useState("card_active");
  const [trailerFlag, setTrailerFlag] = useState("card_active_without-trailer");

  useEffect(() => {
    tg.ready();
    dispatch(animeArrayDataThunk())
  }, [dispatch])

  console.log(data)
  tg.backgroundColor = "#ffffff"
  tg.headerColor = "#707920"
  tg.MainButton.text = "peepo"
  tg.MainButton.show();
  tg.BackButton.show();

  console.log(tg.viewportStableHeight)

  return (
    <div className="wrapper">
      {
        (!data) ? <p>Is Loading...</p> :
        data.data?.map(({mal_id, duration, episodes, genres, images, rating, score, status, studios, synopsis, title, trailer, year}) => {
          return (
            <div className="card" key={mal_id}
              onClick = {(e) => {
                e.currentTarget.classList.add(trailerFlag)
              }}
            >
              <div className='union'>
                <div className="preview"
                  style={{background: `url(${images.jpg.image_url})`}}
                >
                  <div className="score">
                    <p>{score}</p>
                  </div>
                </div>
                <div className="content">
                  <div className="close"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.currentTarget.parentElement.parentElement.parentElement.classList.remove(trailerFlag)
                    }}
                  >
                    <div className="line-one"></div>
                    <div className="line-two"></div>
                  </div>
                  <p className='content_text'>
                    <b>Title: </b>
                    {title}
                  </p>
                  <p className='content_text'>
                    <b>Episodes: </b>
                    {episodes}
                  </p>
                  <p className='content_text'>
                    <b>Duration: </b>
                    {duration}
                  </p>
                  <p className='content_text'>
                    <b>Status: </b>
                    {status}
                  </p>
                  <p className='content_text'>
                    <b>Year of issue: </b>
                    {year}
                  </p>
                  <p className='content_text'>
                    <b>Genre: </b>
                    {
                      genres.map(({name}, index) => {
                        if (index === genres.length - 1) return name
                        else return name + ', '
                      })
                    }
                  </p>
                  <p className='content_text'>
                    <b>Age restrictions: </b>
                    {rating}
                  </p>
                  <p className='content_text'>
                    <b>Studios: </b>
                    {
                      studios.map(({name}, index) => {
                        if (index === studios.length - 1) return name
                        else return name + ', '
                      })
                    }
                  </p>
                </div>
              </div>
              {/* {
                trailer.embed_url ? 
                <div className='video-content'>
                  <p><b>Watch trailer: </b></p>
                  <iframe className='video' width="285" height="180" 
                    src={trailer.embed_url} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    ariaControls='0'
                    allowFullscreen
                  >
                  </iframe> 
                </div> : setTrailerFlag("card_active_without-trailer")
              } */}
              <div className="title">
                <p>{title}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
