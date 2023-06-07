import React from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import {useForm, Controller, SubmitHandler, useFormState} from "react-hook-form";
import {loginValidation} from "./validation";
import {useAppDispatch} from "../../../store";
import {loginUser} from "../../../store/auth/actionCreators";
import {Link as RouterLink} from "react-router-dom";
import "./auth-form.css"

interface ISingInForm {
    username: string;
    password: string;
}

export const AuthForm = () => {
    const dispatch = useAppDispatch()

    const {handleSubmit, control} = useForm<ISingInForm>()
    const {errors} = useFormState({control})
    const onSubmit: SubmitHandler<ISingInForm> = (data) =>
        dispatch(loginUser({username: data.username, password: data.password}))

    return (
        <div className="auth-form">
            <Typography variant="h1" component="div" gutterBottom={true} className="auth-form__title" fontWeight="bold"
                        fontSize="56px" letterSpacing="5px" textTransform="uppercase">
                Sign In
            </Typography>
            <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="username"
                    rules={loginValidation}
                    render={({field}) => (
                        <TextField
                            label="User Name"
                            variant="standard"
                            size="small"
                            margin="normal"
                            className="auth-form__input"
                            fullWidth={true}
                            placeholder="Example123"
                            sx={{
                                "& input": {color: 'white'},
                                "& .MuiFormLabel-root": {color: 'white'},
                                '& .MuiInput-underline:before': {borderBottomColor: 'white'},
                                '& 	.Mui-error': {color: 'white'},
                            }}
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            error={!!errors.username?.message}
                            helperText={errors.username?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={loginValidation}
                    render={({field}) => (
                        <TextField
                            label="Password"
                            type="password"
                            variant="standard"
                            size="small"
                            margin="normal"
                            className="auth-form__input"
                            fullWidth={true}
                            placeholder="*************"
                            sx={{
                                "& input": {color: 'white'},
                                "& .MuiFormLabel-root": {color: 'white'},
                                '& .MuiInput-underline:before': {borderBottomColor: 'white'},
                                '& 	.Mui-error': {color: 'white'},
                            }}
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            error={!!errors.password?.message}
                            helperText={errors.password?.message}
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="success" fullWidth={true} disableElevation={true}
                        disableRipple={true} sx={{padding: 2, marginTop: 4}}>
                    Sign In
                </Button>
            </form>
            <Typography variant="caption" component="div" gutterBottom={true} className="auth-form__caption"
                        fontWeight="light" letterSpacing="2px" fontSize="12px"
                        sx={{marginTop: 4}}>
                Don’t have account yet? <RouterLink to="/register" style={{textDecoration: "none"}}><Link href="#"
                                                                                                          underline="hover">New
                Account</Link></RouterLink>
            </Typography>
        </div>
    )
}
