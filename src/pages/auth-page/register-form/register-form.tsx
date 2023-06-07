import React from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import {useForm, Controller, SubmitHandler, useFormState} from "react-hook-form";
import {loginValidation} from "./validation";
import "./register-form.css"
import {useAppDispatch} from "../../../store";
import {registerUser} from "../../../store/register/actionCreators";
import {Link as RouterLink} from "react-router-dom";

interface ISingUpForm {
    password: string;
    username: string
    displayName: string;
    secondPassword: string
}

export const RegisterForm = () => {
    const dispatch = useAppDispatch()

    const {handleSubmit, control} = useForm<ISingUpForm>()
    const {errors} = useFormState({control})
    const onSubmit: SubmitHandler<ISingUpForm> = (data) => {
        if (data.password === data.secondPassword) {
            dispatch(registerUser({
                password: data.password,
                username: data.username,
                displayName: data.displayName
            }))
        }
    }

    return (
        <div className="register-form">
            <Typography variant="h1" component="div" gutterBottom={true} className="register-form__title"
                        fontWeight="bold"
                        fontSize="56px" letterSpacing="5px" textTransform="uppercase">
                Sign Up
            </Typography>
            <Controller
                control={control}
                name="username"
                rules={loginValidation}
                render={({field}) => (
                    <TextField
                        label="Full Name"
                        variant="standard"
                        size="small"
                        margin="normal"
                        className="register-form__input"
                        fullWidth={true}
                        placeholder="Example Name"
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
            <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="displayName"
                    rules={loginValidation}
                    render={({field}) => (
                        <TextField
                            label="User Name"
                            variant="standard"
                            size="small"
                            margin="normal"
                            className="register-form__input"
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
                            error={!!errors.displayName?.message}
                            helperText={errors.displayName?.message}
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
                            className="register-form__input"
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

                <Controller
                    control={control}
                    name="secondPassword"
                    rules={loginValidation}
                    render={({field}) => (
                        <TextField
                            label="Confirm Password"
                            type="password"
                            variant="standard"
                            size="small"
                            margin="normal"
                            className="register-form__input"
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
                    Sign Up
                </Button>
            </form>
            <Typography variant="caption" component="div" gutterBottom={true} className="register-form__caption"
                        fontWeight="light" letterSpacing="2px" fontSize="12px"
                        sx={{marginTop: 4}}>
                I have an account. <RouterLink to="/" style={{textDecoration: "none"}}><Link href="#" underline="hover">Go
                to Sign in</Link></RouterLink>
            </Typography>
        </div>
    )
}
