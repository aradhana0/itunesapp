 import React from "react";
 import "./Header.scss";

 const Header = (props) => {
    const {author, icon } = props;

    return(
        <div className="HeaderContainer">
            <img src={icon} alt={'app-icon'}/>
            <div className="appName">Music
                <span className="appSubtitle">{author.name.label}</span>
            </div>
            {props.children}
        </div>
    )
}

export default React.memo(Header);