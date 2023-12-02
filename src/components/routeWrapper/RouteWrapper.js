import { useContext } from "react";
import LoginPage from "../../pages/login/LoginPage";
import { UserDetailsContext } from "../context/LoginContext";

export default function ValidateLogin({Children}){
    const wantedCredentials = ['COORDINATOR', 'PROFESSOR'];
    const userContext = useContext(UserDetailsContext);
    const sessionStorageRoles = localStorage.getItem('roles');

    const hasMatchingRole = (roles) =>
    roles === wantedCredentials[0] || roles === wantedCredentials[1];

    let authenticated = false;

    if (
    (userContext.userRoles || sessionStorageRoles) &&
    (hasMatchingRole(sessionStorageRoles) ||
        hasMatchingRole(userContext.userRoles.roles))
    ) {
    authenticated = true;
    }

    return(
        <>
            {
                authenticated 
                ? Children
                : <LoginPage/>
            }
        </>
    )
}