import { useContext, useState } from "react";
import LoginPage from "../../pages/login/LoginPage";
import { UserDetailsContext } from "../context/LoginContext";

export default function ValidateLogin(props){
    const wantedCredentials=['COORDINATOR','PROFESSOR']
    
    const userContext=useContext(UserDetailsContext)
    const [authenticated, setAuthenticated] = useState(false);

    function isAuthenticated(){
       const userDetailState = userContext.userRoles;
       console.log("User Roles from Wrapper:", userContext.userRoles);
       if(userDetailState.includes(wantedCredentials[0]) || userDetailState.includes(wantedCredentials[1])){
         setAuthenticated(true);
       }else{
        setAuthenticated(false);
       }
       console.log("authenticated", authenticated);
       return authenticated;
    }

    return(
        <>
            {
                isAuthenticated === true 
                ? props.element
                : <LoginPage/>
            }
        </>
    )
}