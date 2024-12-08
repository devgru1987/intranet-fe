// import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { deletePolicy } from "../../app/features/Policy/policySlice"
import './AdminPolicy.css'

const AdminPolicy = ({ id, name, department }) => {
    const dispatch =  useDispatch()
     
    const handleDelete = () => {
      dispatch(deletePolicy(id))
    }
   
    return (
        <tr className="policy-control">
          <td id="doc-title">{name}</td>
          <td id="department">{department}</td>
          <td id="delete"><button id="delete" onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}

export default AdminPolicy;