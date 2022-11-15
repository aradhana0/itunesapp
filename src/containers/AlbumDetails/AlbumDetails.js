

const AlbumDetails = ({selectedAlbum, setShowDetails}) => {

    return <>
    <div className={'albumCard'}>
                <div className='modalAlbumContainer'>
                        <div className='modalImageContent'>
                            <p><strong>{selectedAlbum.title.label}</strong> </p>
                            <p>Artist: {selectedAlbum['im:artist'].label}</p>
                            <p>Price : {selectedAlbum['im:price'].label}</p>
                            <p>Release Date: {new Date(selectedAlbum['im:releaseDate'].label).toDateString()}</p>
                            <p>{selectedAlbum.rights.label}</p>
                            <a target={'_blank'} href={selectedAlbum.link.attributes.href}>Check it </a>     
                            
                            <button type={'button'} className={'btn btn-secondary closeBtn'} onClick={()=>setShowDetails(false)}>Close</button>                                                 
                        </div>
                                       
                </div>          
            </div>
    </>
}

export default AlbumDetails;