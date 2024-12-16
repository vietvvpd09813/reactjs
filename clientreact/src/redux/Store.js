import { configureStore } from '@reduxjs/toolkit'
import { todoApi } from './createAPI'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
    reducer: {
      [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todoApi.middleware),
  })
  setupListeners(store.dispatch)

export default store
  