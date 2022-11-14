import { useRef } from "react";
import "./Search.scss";

 export const Search = (props) => {
    const searchRef = useRef();
    
     return(
         <div className="SearchContainer">
             <div className="inputContainer"><input type="text" ref={searchRef} placeholder="Search..." className="inputBox"/></div>
             
         </div>
     )
 }