import api from "../../api"
import {Dispatch} from "@reduxjs/toolkit";
import {
    registerFailure,
    registerStart,
    registerSuccess
} from "./registerReducer";
import {IRegisterRequest} from "../../api/register/types";

export const registerUser = (data: IRegisterRequest) => async (dispatch: Dispatch): Promise<void> => {
    try{
        dispatch(registerStart())

        const res = await api.register.register(data)

        dispatch(registerSuccess(res.data.username))
    } catch (e: any) {
        console.log(e)

        dispatch(registerFailure(e.message))
    }
}
