import { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setSearchResult } from "../../store/albumslice";
import "./Search.scss";

 export const Search = (props) => {
    const searchRef = useRef();
    const dispatch = useDispatch();
    const {albumList, searchResult} = useSelector((state) => state.album);


    const debounce = (func, timeout=500) => {
        let timer;
        return (args) => {
            clearTimeout(timer);
            timer = setTimeout(()=>func.apply(this, args), timeout);
        }

    }

    const searchAlbum = debounce(() => {
        let searchStr = searchRef.current.value;
        
        let res = albumList.entry.filter(c => c.title.label.toLowerCase().match(searchStr.toLowerCase()));
        dispatch(setSearchResult(res));
    })
     return(
         <div className="SearchContainer">
            <div className="inputContainer">
                <input type="text" 
                ref={searchRef} 
                placeholder="Search..." 
                onKeyUp={searchAlbum}
                className={[searchResult.length < 1 ? 'red inputBox': 'inputBox']}/>
            </div>
             
         </div>
     )
 }