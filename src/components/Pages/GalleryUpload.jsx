import {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import fileTypeChecker from "file-type-checker";
import { FaFileUpload } from "react-icons/fa";
import {uploadPicture, fetchPictures} from '../../app/features/Gallery/gallerySlice'
import { selectAllPictures, getError, getStatus } from '../../app/features/Gallery/gallerySlice';
import AdminPictureFrame from '../Partials/AdminPictureFrame';
import './Gallery.css'

const GalleryUpload = () => {
    const dispatch = useDispatch()

    const pictureList =  useSelector(selectAllPictures)
    const pictureStatus =  useSelector(getStatus)
    const errorStatus = useSelector(getError)

    const [file, setFile] = useState('')// uploaded image
    const [isRequiredFileType, setIsRequiredFileType] = useState(false) //true when image is valid, false when not
    const [validationError, setValidationError] = useState('') // captures the error during validation
    const [showForm, setIshowForm] = useState(false)

    useEffect(() => {
        if(pictureStatus === 'idle') {
            dispatch(fetchPictures())
        }
    }, [pictureStatus, dispatch])

    const handleUploadeFile = (event) => {
        try {
          const blobFile = event.target.files[0];
          const reader = new FileReader();
          const types = ["jpeg", "png", "gif"];
          reader.onload = () => { // When the file is loaded, validate its type
            const isImage = fileTypeChecker.validateFileType(reader.result, types, { excludeSimilarTypes: true });
            if(isImage) {
                setFile(event.target.files[0])
                setValidationError('') //Clear any validation errors if any
                setIsRequiredFileType(true)
            }else{
                setIsRequiredFileType(false)
            }
          };
          reader.readAsArrayBuffer(blobFile);// Use the FileReader API to read the file as an ArrayBuffer
        } catch (err) {
          setValidationError("Error: ", err.message);
        }
    };

    const displayForm = () => {
        setIshowForm(!showForm)
    }

    const handleSaveFile = (event) => {
        event.preventDefault()
        const formData =  new FormData()
        formData.append('file', file )
        const config =  {headers: { 'content-type': 'multipart/form-data'} }
        dispatch(uploadPicture(formData, config))
    }

    let displayContent
    if(pictureStatus === 'loading'){
        displayContent = <p>Loading ..</p>
    }else if(pictureStatus === 'succeded'){
        displayContent = pictureList.map((file) => <AdminPictureFrame key={file._id} id={file._id} filename={file.filename} />)
    }else if(pictureStatus === 'failed'){
        displayContent = <p>{`${errorStatus}... Please reload page`}</p>
    }

    return (
  
        <div className="gallery-uploads">

            {
                showForm ? 
                <form onSubmit={handleSaveFile} id="upload-form">
                    <h3>Upload a New Image</h3>
                    <p>Please fill out the following form and press the Upload button</p>
                    <div id="image-upload-section">
                        <input type='file' id="picture-upload" onChange={handleUploadeFile}/><br />
                        {!isRequiredFileType && file != '' && <p style={{color:"red"}}>Unsupported file type</p>}
                        <button 
                            type="submit" 
                            id="btn-save-picture" 
                            disabled={!isRequiredFileType} 
                            onClick={handleSaveFile}>
                            Submit
                        </button>
                    </div>
                </form>
                :
                <div id="gallery-into">
                    <h3>Image gallery</h3>
                    <p>This page displays the list of all uploaded images</p>
                    <button onClick={displayForm}>Upload more</button>
                </div>
            }

            <div id="admin-pictures">
                { displayContent }
            </div>
        </div>
    
    )
}

export default GalleryUpload