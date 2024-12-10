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
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import Header from '../Partials/Header'
import './Events.css'

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

const Events = () => {
    const dispatch = useDispatch();
    const status =  useSelector(getStatus)
    const events = useSelector(selectAllEvents) 
    const [calenderEvent, setCalenderEvent] = useState({ title: '', allday: false, start: null, end: null })
    const eventList =  useSelector(selectAllEvents)
   
    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchEvents())
        }
    }, [events, status])
   

    return (
        <div className="component">
            <div id="calender-event">
                <div id="user-calender">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Events
