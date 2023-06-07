import {axiosInstances} from "../instance";
import {ILogInRequest, ILogInResponse} from "./types";
import Endpoints from "../endpoints";
import {AxiosPromise} from "axios";

export const login = (params: ILogInRequest): AxiosPromise<ILogInResponse> =>
    axiosInstances.post(Endpoints.AUTH.LOGIN, params)

export const logOut = (): AxiosPromise =>
    axiosInstances.get(Endpoints.AUTH.LOGOUT)
