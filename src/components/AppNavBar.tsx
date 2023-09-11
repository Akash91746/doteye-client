import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import useGetUser from "../hooks/useGetUser";
import { useEffect } from "react";
import StringResources from "../utils/StringResources";

const AppNavBar = () => {

    const { data } = useGetUser();

    const googleAuth = () => {
        window.open(
            `${StringResources.BASE_API_URL}/api/v1/auth/login/google`,
            "_self"
        );
    }

    const logoutUser = async () => {
        window.open(
            `${StringResources.BASE_API_URL}/api/v1/auth/logout`,
            "_self"
        );
    }

    useEffect(() => {
        console.log("user is ", data);
    }, [data]);

    return <AppBar position="static" component='header'>
        <Toolbar sx={{ display: "flex", justifyContent: 'space-between' }}>
            <Typography>
                dotEYE
            </Typography>

            {
                data ?
                    <Button variant="text" color="inherit" onClick={logoutUser}>
                        Logout
                    </Button>
                    :
                    <Button variant="text" color="inherit" onClick={googleAuth}>
                        Login
                    </Button>
            }
        </Toolbar>
    </AppBar>;
}

export default AppNavBar;