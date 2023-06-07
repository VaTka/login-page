import React from "react";
import "./profile-page.css"
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logOutImg from "../../img/logout.png"
import decor from "../../img/Decor.png"
import {useAppDispatch} from "../../store";
import {logOutUser} from "../../store/auth/actionCreators";

export const ProfilePage: React.FC = () => {
    const dispatch = useAppDispatch()

    return (
        <div className="profile-page__content">
            <div className="profile-page__container">
                <div className="profile-page__title">
                    <Typography variant="h2" gutterBottom fontWeight="bold" fontSize="48px" textTransform="uppercase"
                                sx={{color: "#fff"}}>
                        Congratulations
                    </Typography>
                    <img src={decor} alt="decor"/>
                </div>
                <Typography variant="h5" gutterBottom fontWeight="medium" fontSize="16px" className="profile-page__text"
                            sx={{color: "#fff"}}>
                    Now you are on the main page. Soon we will provide you with detailed feedback on the result of your
                    work
                </Typography>
                <Button type="submit" variant="contained" color="success" disableElevation={true}
                        disableRipple={true} sx={{padding: 2, marginTop: 4,}} className="profile-page__button" onClick={() => dispatch(logOutUser())}>
                    Log Out
                </Button>
                <img src={logOutImg} alt="logautImg"/>
            </div>
        </div>
    )
}
