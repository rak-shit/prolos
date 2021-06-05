import { configureStore } from '@reduxjs/toolkit'
import setCredentialsReducer from './reducers/setCredentialsReducer'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: {
    credentials: setCredentialsReducer
  },
  middleware: [logger, thunk]
})
