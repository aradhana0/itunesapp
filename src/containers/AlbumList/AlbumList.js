import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'react-bootstrap/Image';

import './AlbumList.scss';
import { setCategoriesList, updateCategoriesList } from '../../store/albumslice';
import AlbumDetails from '../AlbumDetails/AlbumDetails';



export const AlbumList = () => {
    
    const dispatch = useDispatch();
    const {albumList, categories, selectedCategory, searchResult} = useSelector((state) => state.album);

    const [showDetails, setShowDetails] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState({});

   

    const getCategories = () => {
        let obj = {};
        let res = searchResult.length > 0 ? searchResult : albumList.entry;
        res.map(album => {
            if(album?.category?.attributes?.label in obj){
                obj[album.category.attributes.label].push(album)
            }
            else{
                obj[album.category.attributes.label] = [];
                obj[album.category.attributes.label].push(album);
            }
        });
        
        dispatch(updateCategoriesList(obj))
    }

    useEffect(()=>{
        getCategories()
      },[searchResult, albumList])

    const addToFavourite = (album) => {
        let favourite = categories.Favourite;
        let obj = favourite ? { Favourite: [...favourite, album] } : { Favourite: [album]};
        dispatch(setCategoriesList(obj));
      }
      const showAlbumDetails = (album) => {
        setSelectedAlbum(album);
        setShowDetails(!showDetails);
      }

      const AlbumsMapping =  ({albums}) => {
        return albums.map(album => {
            return <React.Fragment key={album.id.attributes['im:id']} >
            <div className={'albumCard'}>
                {(!categories.Favourite || categories.Favourite?.filter(c=> c.id.attributes['im:id'] === album.id.attributes['im:id']).length < 1) &&
                Object.keys(categories).length > 0 && 
                <button className='btn btn-danger addToFavourite' onClick={() => addToFavourite(album)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </button>}
                <div className='imgContent'>
                    <Image 
                    src={album['im:image'][2].label} alt={'album'} fluid/>
                    <div  className='imageDetails'>
                        <p className='imageTitle'> {album['im:name'].label}</p>
                    </div>
                    <button className={'btn btn-secondary'}  onClick={()=>showAlbumDetails(album)}>Show Details</button>
                </div> 
                {showDetails && selectedAlbum.id.attributes['im:id'] === album.id.attributes['im:id'] &&
                <>
                    <AlbumDetails selectedAlbum={selectedAlbum} setShowDetails={setShowDetails}/>
                </>

                }         
            </div>
            
        </React.Fragment>
        })
      }

      
        return Object.entries(categories).map(([key,value]) => {
            return <React.Fragment key={key}>
                    {!selectedCategory && <>
                    <h4 className='categoryName'>{key} ({categories[key].length})</h4>
                    <div className={'categoriesContainer'}>
                        <AlbumsMapping albums={value}/>
                    </div>
                    </>}
                    {selectedCategory && selectedCategory===key && <>
                    <h4 className='categoryName'>{key} ({categories[key].length})</h4>
                    <div className={'categoriesContainer'}>
                        <AlbumsMapping albums={value}/>
                    </div>
                    </>}
                </React.Fragment>
        })
  }