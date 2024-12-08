import {useState, useEffect} from 'react'
import { selectAllPictures, fetchPictures, getStatus  } from '../../app/features/Gallery/gallerySlice'
import { useSelector, useDispatch } from 'react-redux'
import { MdClose } from "react-icons/md";
const BASE_URL = 'http://localhost:3000/uploads/gallery'

const SemiDisplay = ({startIndex, toggleShowDisplay }) => {
    const dispatch =  useDispatch()
    const status =  useSelector(getStatus)
    const pictureList = useSelector(selectAllPictures)
    const [index, setIndex] = useState(startIndex)
    const [pictureCount, setPictureCount] = useState(pictureList.length)
    const [intervalID, setIntervalID] =  useState(null)

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchPictures())
        }
    }, [pictureList, status])

    const handleNext = () => {
        if(index >= pictureCount-1){
            setIndex(0)
        }else{
            setIndex((index) => index + 1)
        }  
    }

    const handleAutoPlay = (index) => {
        if(!intervalID) {
            const id = setInterval(handleNext, 3000)
            setIntervalID(id)
        }
    }

    const handlePause = () => {
        if(intervalID){
            clearInterval(intervalID)
            setIntervalID(null)
        }
    }

    const handlePrev = () => {
        if(index <= 0) {
            setIndex(pictureCount - 1)
        }else{
            setIndex((index) => index - 1)
        }
    }

    const closeImagePreview = () => {
        toggleShowDisplay()
        if(intervalID){
            clearInterval(intervalID)
            setIntervalID(null)
        }
    }

   
    return (
        <div id="picture-container">
            <div id="inner-picture-container">

                <div id="picture-reel">
                    { index  >= (pictureCount) ? 
                        <p>End of play list, click next to replay</p> : 
                        <img id="contain" src={`${BASE_URL}/${pictureList[index].filename}`} /> 
                    } 

                    <MdClose id="close-btn" size="2em" onClick={closeImagePreview}/>

                    <div id="picture-controls">
                        <button onClick={handlePrev}>Prev</button>
                        { !intervalID ? <button onClick={handleAutoPlay}>Play</button> : <button onClick={handlePause}>Pause</button> }
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SemiDisplay