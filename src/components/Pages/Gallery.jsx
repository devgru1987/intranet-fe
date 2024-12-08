import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAllPictures, fetchPictures, getStatus } from "../../app/features/Gallery/gallerySlice"
import GalleryFrame from "../Partials/GalleryFrame"
import SemiDisplay from "../Partials/SemiDisplay"

const Gallery = () => {
    const dispatch =  useDispatch()
    const pictureList =  useSelector(selectAllPictures)
    const status = useSelector(getStatus)
    const [startIndex, setStartIndex] = useState(0)
    const [showSemiDisplay, setShowSemiDsiplay] = useState(false)

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fetchPictures())
        }
    }, [status, dispatch])

    const handleImageClick = (index) => {
        setStartIndex(index)
        setShowSemiDsiplay(true)
    }

    const toggleShowDisplay = () => {
        setShowSemiDsiplay(!showSemiDisplay)
        console.log('called remotely')
    }

    
    const displayContent = pictureList.map((picture, index) => <div key={picture._id}>
            <GalleryFrame 
                filename={picture.filename}
                onClick={() => handleImageClick(index)}
                index={index}
            />
        </div>
    )
    
    return (
        <div className="component">
            <section id="gallery">
               {displayContent}
            </section> 

            { 
                showSemiDisplay ? 
                    <div id="full-screen-display">
                        <SemiDisplay startIndex={startIndex} toggleShowDisplay={toggleShowDisplay}/>
                    </div> 
                : ''
            }
             
        </div>
    )
}

export default Gallery