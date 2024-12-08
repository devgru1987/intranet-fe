import '../Pages/Gallery.css'

const BASE_URL = 'http://localhost:3000/uploads/gallery'

const GalleryFrame = ({filename, onClick, index}) => {
    return (
        <div id="gallery-frame" onClick={onClick}>
            <img src={`${BASE_URL}/${filename}`} alt="ithuba gallery picture" />
        </div>
    )
}

export default GalleryFrame