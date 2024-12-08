import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/gallery'

export const uploadPicture = createAsyncThunk('pictures/uploadPictures', async (formData, config) => {
  try {
    const response =  await axios.post(`${BASE_URL}/upload`, formData, config)
    return response.data.message
  }catch(err){
    return err.message
  }
}) 

export const fetchPictures =  createAsyncThunk('pictures/fetchPictures', async () => {
  try {
    const response = await axios.get(`${BASE_URL}/fetch/pictures`)
    return response.data.pictures
  }catch(err){
    return err.message
  }
})

export const deletePicture =  createAsyncThunk('pictures/deletePictures', async(id) => {
  try {
    const response =  await axios.delete(`${BASE_URL}/delete/${id}`)
    if(response.data.deletedPicture) return id /* if the image is delete from db, delete from redux*/
  }catch(err){
    return err.message
  }
})

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    pictures: [],
    status: "idle", //pending, failed
    error: null
  },

  reducers: {
    addImage: state => {
      state.policies =  [...state,policies, state]
    },

    removeImage: state => {
      state.value -= 1
    },
  },

  extraReducers(builder){
    builder
    .addCase(fetchPictures.pending, (state, action) => {
      state.status = 'pending'
    
    })
    .addCase(fetchPictures.fulfilled, (state, action) => {
      state.status = 'succeded'
      state.pictures = action.payload
    })
    .addCase(fetchPictures.rejected, (state, action)  => {
      state.status = 'failed'
      state.error = action.error.message
    })
    .addCase(deletePicture.fulfilled, (state, action) => {
      const id = action.payload
      state.pictures = state.pictures.filter((picture) => picture._id !== id)
    })
    .addCase(uploadPicture.fulfilled, (state, action) => {
      state.pictures.push(action.payload)
    })
  }
})

// Action creators are generated for each case reducer function
export const selectAllPictures = (state) => state.gallery.pictures
export const getStatus = (state) => state.gallery.status
export const getError = (state) => state.gallery.error
export const { addImage, removeImage} = gallerySlice.actions
export default gallerySlice.reducer