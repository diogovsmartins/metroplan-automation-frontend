import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LoginForm from "../../components/forms/loginForm/LoginForm";

export default function LoginPage(){

 //   function login(){
        //do a request to backend to authenticate user based on rule
   // }

    return(
        <>
            <Header />
            <LoginForm />
            <Footer />
        </>
    );
}