import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import { getiTuensAlbumList } from "./service/api";
import { setAlbumList } from './store/albumslice';
import Header from './components/HeaderComponent/Header';
import { Filters } from './containers/Filters/Filters';
import { AlbumList } from './containers/AlbumList/AlbumList';


function App() {
  const dispatch = useDispatch();
  const albumList = useSelector(state => state.album.albumList)


  const getAlbumList = () => {
    getiTuensAlbumList()
    .then((res)=>{
      dispatch(setAlbumList(res.data.feed))
    })
  }

  useEffect(()=>{
    getAlbumList()
  },[])

  


  return (
    <div className="App">
      {albumList.author && 
      <>
        <Header author={albumList.author} icon={albumList.icon.label}/>
        <div>
          <Filters/>
        </div>
        <div className={'albumContainer'}>
          <AlbumList albumList={albumList}/>
        </div>
      </>
      }
    </div>
    
  );
}

export default App;
