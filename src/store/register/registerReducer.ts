import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface RegisterState {
    registerData: {
        id: number|null,
        username: string|null,
        displayName: string|null,
        isLoading: boolean,
        admin: boolean
        error: string|null
    }
}

const initialState: RegisterState = {
    registerData: {
        id: 0,
        username: null,
        displayName: null,
        isLoading: false,
        admin: false,
        error: null
    }
}

export const registerReducer = createSlice({
    name: "register",
    initialState,
    reducers: {
        registerStart: (state): RegisterState => ({
            ...state,
            registerData: {
                ...state.registerData,
                isLoading: true
            }
        }),
        registerSuccess: (state, action: PayloadAction<string>): RegisterState => ({
            ...state,
            registerData: {
                ...state.registerData,
                username: action.payload,
                isLoading: false,
                error: null
            }
        }),
        registerFailure: (state, action: PayloadAction<string>): RegisterState => ({
            ...state,
            registerData: {
                ...state.registerData,
                isLoading: false,
                error: action.payload
            }
        }),
    },
})

export const {registerStart, registerSuccess, registerFailure} = registerReducer.actions
export default registerReducer.reducer
