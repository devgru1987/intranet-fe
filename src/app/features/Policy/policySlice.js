import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const BASE_URL = 'http://localhost:3000/policies'


export const fetchPolicies = createAsyncThunk('policies/fetchPolicies', async () => {
    try{
        const response =  await axios.get(`${BASE_URL}/fetch`)
        return response.data.policies
    }catch (err) {
        return err.message
    }
})

export const deletePolicy =  createAsyncThunk('policies/deletePolicies', async (id) => {
    try{
      const response =  await axios.delete(`${BASE_URL}/delete/${id}`)
      return response.data
    }catch(err){
      return err.message
    }
})

export const postPolicies = createAsyncThunk('policies/postPolicies', async (formData, config) => {
  try {
    const response =  await axios.post(`${BASE_URL}/upload`, formData, config)
    return response.data.message
  }catch (err) {
      console.log(`Error on front end: ${err}`) /* to be handled*/
  }
})

export const policySlice = createSlice({
  name: 'policy',
  initialState: {
    policies: [],
    status: 'idle', //loading, succeded, failed
    error: null
  },

  reducers: {
    addPolicy: state => {
      state.policies.push(action.payload) // Add a new pol
    },

    removePolicy: state => {
      state.policies = state.policies.filter(policy => policy.id !== action.payload) // Remove by id
    },
  },

  extraReducers(builder){
    builder
    /* load policies into the application*/ 
    .addCase(fetchPolicies.pending, (state, action) => {
      state.status = 'pending'
    
    })
    .addCase(fetchPolicies.fulfilled, (state, action) => {
      state.status = 'succeded'
      state.policies = action.payload
    })
    .addCase(fetchPolicies.rejected, (state, action)  => {
      state.status = 'failed'
      state.error = action.error.message
    }) 
    .addCase(deletePolicy.fulfilled, (state, action) => {
      const id = action.payload.message._id
      state.policies = state.policies.filter((policy) => policy._id !== id)
    })
    .addCase(postPolicies.fulfilled, (state, action) => {
      state.policies.push(action.payload)
    })
  }
})

// Action creators are generated for each case reducer function
export const getAllPolicies = (state) => state.policy.policies
export const getPolicyStatus = (state) => state.policy.status
export const getPolicyError = (state) => state.policy.error
export const { addPolict, removePolicy} = policySlice.actions
export default policySlice.reducer