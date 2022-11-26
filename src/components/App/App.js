import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { animeArrayDataThunk } from '../../slice/animeArrayDataFetchSlice';
import './App.scss';


const tg = window.Telegram.WebApp;


function App() {
  const data = useSelector(state => state.animeArrayData.animeArrayData);
  const dispatch = useDispatch();

  useEffect(() => {
    tg.ready();
    dispatch(animeArrayDataThunk())
  }, [dispatch])

  console.log(data)

  
  tg.MainButton.text = "peepo"
  tg.MainButton.show();

  return (
    <div className="wrapper">
      {
        data ? <>
          <p>Q</p>
          <ul>
            <li>Версия: {tg.version}</li>
            {/* <li>id: {tg.WebAppInitData.id}</li> */}
            <li>имя пользователя: {tg.WebAppInitData.first_name}</li>
            <li>никнейм: {tg.WebAppInitData.username}</li>
            <li>language_code: {tg.WebAppInitData.language_code}</li>
            <li>premium: {tg.WebAppInitData.is_premium}</li>
            <li>photo url: {tg.WebAppInitData.photo_url}</li>
          </ul>
        </>
        // data.data.map(({mal_id, duration, episodes, genres, images, score, studios, title, trailer, year}) => {
        //   return <div className="card" key={mal_id}
        //     onClick = {(e) => {
        //       e.currentTarget.classList.add("card_active")
        //     }}
        //   >
        //     <div className="preview"
        //       style={{background: `url(${images.jpg.image_url})`}}
        //     >
        //       <div className="score">
        //         <p>{score}</p>
        //       </div>
        //     </div>
        //     <div className="content">
        //       <div className="close"
        //         onClick={(e) => {
        //           console.log('loh')
        //           e.stopPropagation();
        //           e.currentTarget.parentElement.parentElement.classList.remove("card_active")
        //         }}
        //       >
        //         <div className="line-one"></div>
        //         <div className="line-two"></div>
        //       </div>
        //     </div>
        //     {
        //       trailer.embed_url ? 
        //       <div className='video-content'>
        //         <p>Watch trailer</p>
        //         <iframe className='video' width="318" height="180" 
        //           src={trailer.embed_url} 
        //           title="YouTube video player" 
        //           frameborder="0" 
        //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //           allowfullscreen>
        //         </iframe> 
        //       </div> : null
        //     }
        //     <div className="title">
        //       <p>{title}</p>
        //     </div>
        //   </div>
        // })
        : <p>Is Loading...</p>
      }
    </div>
  );
}

export default App;
