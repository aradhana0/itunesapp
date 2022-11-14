import { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { getiTuensAlbumList } from "./service/api";
import { useEffect, useState } from 'react';
import { Header } from './components/HeaderComponent/Header';
import { Search } from './components/SearchComponent/Search';


function App() {
  const [ albumList, setAlbumList ] = useState([]);

  const getAlbumList = () => {
    getiTuensAlbumList()
    .then((res)=>{
      console.log('album====',res.data.feed)
      setAlbumList(res.data.feed)
    })
  }

  useEffect(()=>{
    getAlbumList()
  },[])

  const AlbumList = () => {
    return albumList.entry.map(album => {
      return (
        <div key={album.id.attributes['im:id']} className={'albumCard'}>
          <div className='imgContent'><img src={album['im:image'][2].label} alt={'album-image'}/></div>
          {/* <hr/> */}
          <div  className='imageDetails'>
          <h4 className='imageTitle'> {album.title.label}</h4>
            <p> Artist: {album['im:artist'].label}</p>
            <p> Price: {new Date(album['im:releaseDate'].label).toDateString()}</p>
            <p> Price: {album['im:price'].label}</p>
          </div>
        </div>
      )
    })
  }


  return (
    <div className="App">
      {albumList.author && 
      <>
      <Header author={albumList.author} icon={albumList.icon.label}>
          <Search/>
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
        <div className={'albumContainer'}>
          <AlbumList/>
        </div>
        </Suspense>
        </>
        }
    </div>
    
  );
}

export default App;
