import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { myMiddleware } from './middlewares'
import reducer from './reducers'

export const store = configureStore({
	reducer,
	middleware: [myMiddleware, ...getDefaultMiddleware()]
})
