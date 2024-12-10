import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit" /* generate random ids */
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US' 
import DatePicker from "react-datepicker";
import { selectAllEvents, addEvent, fetchEvents, getStatus  } from '../../app/features/Events/eventSlice'
import EventModification from '../Partials/EventModification'
import Header from '../Partials/Header'
import './Events.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "react-datepicker/dist/react-datepicker.css";

const locales = {
    'en-US': enUS,
}
  
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

const AddEvents = () => {
    const dispatch = useDispatch();
    const status =  useSelector(getStatus)
    const events = useSelector(selectAllEvents) 
    const eventList =  useSelector(selectAllEvents)
    const [showForm, setShowForm] = useState(false)
    const [showTable, setShowTable] = useState(false)
    const [showCalender, setShowCalender] = useState(true)
    const [calenderEvent, setCalenderEvent] = useState({ title: '', allday: false, start: null, end: null })

    const handleSelectedDisplay = (table_boolean, form_boolean, calender_boolean) => {
        setShowForm(form_boolean)
        setShowTable(table_boolean)
        setShowCalender(calender_boolean)
    }
   
    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchEvents())
        }
    }, [events, status])

    const handleAddEvent = (event) => {
        event.preventDefault()
        dispatch(addEvent({calenderEvent}))
    }

    let displayContent
    if(status === 'loading'){
        displayContent = <p>Loading ..</p>
    }else if(status === 'success'){
        displayContent = eventList.map((calEvent) => <div key={calEvent._id} className="flex-display" id="delete-record">
            <EventModification 
                id = {calEvent._id}
                start = {calEvent.start.toDateString()}
                end = {calEvent.end.toDateString()}
                title = {calEvent.title} 
            />
        </div>)
    }else if(status === 'failed'){
        displayContent = <p>{`${errorStatus}... Please reload page`}</p>
    }

    return(
        <div className="component">
            <section id="calender-event-form">
                <div id="calender-content">
                    {showCalender && 
                        <div id="calender">
                            <Calendar
                                localizer={localizer}
                                events={events}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 500 }}
                            />
                        </div>
                    }   


                    { showTable && 
                        <div id="events-delete-list" className="flex-display flex-column ">
                            <div className="flex-display" id="list-headers">
                                <div className="title display-headers ">Title</div>
                                <div className="start display-headers ">Start</div>
                                <div className="end display-headers ">End</div>
                                <div className="manage display-headers ">Manage</div>
                            </div>
                            { displayContent }
                        </div> 
                    }


                    { showForm && 
                        <form id="event-form" onSubmit={handleAddEvent}>
                            <h1>Add Event</h1>

                            <input 
                                type="text" 
                                id="event-field"
                                placeholder="Event Name" 
                                value={calenderEvent.title}
                                onChange={(e) => setCalenderEvent({...calenderEvent, title: e.target.value})}
                            />

                            <DatePicker 
                                placeholderText="Start date" 
                                selected={calenderEvent.start} 
                                onChange={(date) => setCalenderEvent(
                                        {   ...calenderEvent, 
                                            start: date
                                        }
                                    )
                                } 
                                className="date-picker"
                            />

                            <DatePicker 
                                placeholderText="End date" 
                                selected={calenderEvent.end} 
                                onChange={(date) => setCalenderEvent(
                                        {   ...calenderEvent, 
                                            end: date
                                        }
                                    )
                                } 
                                className="date-picker"
                            />
                            <button 
                                type='submit'
                                onClick={handleAddEvent} 
                                id="event-submit">Save Event
                            </button>
                        </form>
                    }
                </div>

                <div id="calender-handle">
                    <div id="inner-calender-handle">
                        { !showForm && <button onClick={() => handleSelectedDisplay(false, true, false)}>Add Event</button> }
                        { !showTable && <button onClick={() => handleSelectedDisplay(true, false, false)}>Delete Event</button> }
                        { !showCalender && <button onClick={() => handleSelectedDisplay(false, false, true)}>View Calender</button> }
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AddEvents