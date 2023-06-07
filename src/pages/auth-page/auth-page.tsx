import React from "react";
import "./auth-page.css"
import Typography from "@mui/material/Typography";
import {RegisterForm} from "./register-form";
import {AuthForm} from "./auth-form";
import {Routes, Route} from "react-router-dom"
import {ProfilePage} from "../profile-page";
import {useSelector} from "react-redux";
import {IRootState} from "../../store";

export const AuthPage: React.FC = () => {
    const isLoggedIn = useSelector(
        (state: IRootState) => !!state.auth.authData.accessToken
    )

    return (
        <div className="auth-page">
            <div className="auth-page__content">
                <Typography variant="h3" component="div" gutterBottom={true} className="auth-form__title"
                            fontWeight="bold" fontSize="36px" sx={{marginBottom: 1}}>
                    InCode
                </Typography>
                <Typography variant="h5" component="div" gutterBottom={true} className="auth-form__subtitle"
                            fontWeight="medium" fontSize="16px" sx={{marginBottom: 10}}>
                    Finance
                </Typography>

                <Routes>
                    <Route path="/" element={!isLoggedIn ? <AuthForm/> : <ProfilePage/>} />
                    <Route path="/register" element={!isLoggedIn ? <RegisterForm/> : <AuthForm/>} />
                </Routes>

            </div>
        </div>
    )
}
