import { deleteEvent } from '../../app/features/Events/eventSlice'
import { useDispatch } from 'react-redux'
import '../Pages/Events.css'

const EventModification = ({id, start, end, title}) => {
    const dispatch =  useDispatch()

    const handleEvent =  () => {
        dispatch(deleteEvent(id))
    }

    return (
        <>
            <div className="title">{title}</div>
            <div className="start">{start}</div>
            <div className="end">{end}</div>
            <div className="Manage"><button onClick={handleEvent} id="manage-btn">Delete</button></div>
        </>
    )
   
}

export default EventModification