import { configureStore } from '@reduxjs/toolkit'
import policyReducer from './features/Policy/policySlice'
import eventsReducer from './features/Events/eventSlice'
import picturesReducer from './features/Gallery/gallerySlice'

export default configureStore({
  reducer: {
    policy: policyReducer,
    event: eventsReducer,
    gallery: picturesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // disable serializable check for dates passed from calender; https://redux-toolkit.js.org/api/getDefaultMiddleware
    }),
})