import { useContext } from "react";
import LoginPage from "../../pages/login/LoginPage";
import { UserDetailsContext } from "../context/LoginContext";
import HomePage from "../../pages/home/Home";

export default function ValidateLogin(){
    const wantedCredentials=['COORDINATOR','PROFESSOR']
    const userContext = useContext(UserDetailsContext)

    let authenticated = false;

    if (userContext.userRoles) {
        if (userContext.userRoles.roles === wantedCredentials[0] || userContext.userRoles.roles === wantedCredentials[1]) {
            authenticated = true
        } else {
            authenticated = false
        }
    }

    return(
        <>
            {
                authenticated 
                ? <HomePage />
                : <LoginPage/>
            }
        </>
    )
}