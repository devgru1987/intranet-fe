import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const BASE_URL = 'http://localhost:3000/events'

export const addEvent = createAsyncThunk('events/postEvent', async(calenderEvent) => {
  try {
    const response =  await axios.post(`${BASE_URL}`, calenderEvent )
    return response.data.message
  }catch(err) {
    throw new Error(err)
  }
})

export const fetchEvents = createAsyncThunk('events/fetchEvents', async() => {
  try {
    const response =  await axios.get(`${BASE_URL}`)
    return response.data.events
  }catch(err){
    throw new Error(err)
  }
})

export const deleteEvent = createAsyncThunk('delete/deleteEvent', async(id) => {
  try {
    const response =  await axios.delete(`${BASE_URL}/delete/${id}`)
    console.log(response.data.deletedEvent)
    return response.data.deletedEvent
  }catch(err){
    throw new Error(err)
  }
})

export const eventSlice = createSlice({
  name: 'events',
  initialState: {
    eventsList: [],
    status: "idle", //pending, failed; success
    error: null
  }, 

  reducers: {
  },

 extraReducers(builder){
    builder
    .addCase(addEvent.fulfilled, (state, action) => {
      const {start, end } = action.payload
      const newEvent = {...action.payload, start: new Date(start), end: new Date(end)}
      state.eventsList.push(newEvent)
    })
    .addCase(fetchEvents.pending, (state, action) => {
      state.status = 'pending'
    })
    .addCase(fetchEvents.fulfilled, (state, action)  => {
      state.status = 'success'
      state.eventsList = action.payload.map((calEvent) => ({
        ...calEvent,
        start: new Date(calEvent.start),
        end: new Date(calEvent.end)
      }))
    })
    .addCase(fetchEvents.rejected, (state, action)  => {
      state.status = 'failed'
      state.error = action.error.message
    })
    .addCase(deleteEvent.fulfilled, (state, action)  => {
      const id =  action.payload._id
      state.eventsList = state.eventsList.filter((calEvent) => calEvent._id != id)
    })
  }
})

export const selectAllEvents = (state) => state.event.eventsList;
export const getStatus = (state) => state.event.status;
// export const {   } = eventSlice.actions
export default eventSlice.reducer