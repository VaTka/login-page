import {ILogInRequest} from "../../api/auth/types";
import api from "../../api"
import {Dispatch} from "@reduxjs/toolkit";
import {loginFailure, loginStart, loginSuccess, logOutSuccess} from "./authReducer";

export const loginUser = (data: ILogInRequest) => async (dispatch: Dispatch): Promise<void> => {
    try{
        dispatch(loginStart())

        const res = await api.auth.login(data)

        dispatch(loginSuccess(res.data.accessToken))
    } catch (e: any) {
        console.log(e)

        dispatch(loginFailure(e.message))
    }
}

export const logOutUser =
    () =>
        async (dispatch: Dispatch): Promise<void> => {
            try {
                await api.auth.logOut()

                dispatch(logOutSuccess())

            } catch (e) {
                console.error(e)
            }
        }
