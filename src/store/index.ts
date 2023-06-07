import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import {useDispatch} from "react-redux";
import authReducer from "./auth/authReducer";
import registerReducer from "./register/registerReducer";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        register: registerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...(process.env.NODE_ENV !== "production" ? [logger] : []))
})

export type IRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

