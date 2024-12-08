import { useDispatch } from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { deletePicture } from '../../app/features/Gallery/gallerySlice'
import './AdminPolicy.css'

const BASE_URL = 'http://localhost:3000/uploads/gallery'

const AdminPictureFrame = ({ id, filename }) => {
    const dispatch =  useDispatch()
    const handleDelete = () => {
      dispatch(deletePicture(id))
    }
   
    return (
        <div id="thumbnail">
          <img src={`${BASE_URL}/${filename}`} alt="ithuba gallery picture" />
          <div id="img-delete"><AiFillDelete onClick={handleDelete}/></div>
        </div>
    )
}

export default AdminPictureFrame;