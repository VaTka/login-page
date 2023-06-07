import {axiosInstances} from "../instance";
import {IRegisterResponse, IRegisterRequest} from "./types";
import Endpoints from "../endpoints";
import {AxiosPromise} from "axios";

export const register = (params: IRegisterRequest): AxiosPromise<IRegisterResponse> =>
    axiosInstances.post(Endpoints.AUTH.REGISTER, params)
