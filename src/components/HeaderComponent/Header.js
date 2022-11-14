 import "./Header.scss";

export const Header = (props) => {
    const {author, icon } = props;
    console.log('label...', author)

    return(
        <div className="HeaderContainer">
            <div><img src={icon} alt={'app-icon'}/></div> 
            <div className="appName">Music
                <span className="appSubtitle">{author.name.label}</span>
            </div>
            {props.children}
        </div>
    )
}