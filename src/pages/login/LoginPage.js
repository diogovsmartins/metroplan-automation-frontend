import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LoginForm from "../../components/form/loginForm/LoginForm";
import Navbar from "../../components/navbar/Navbar";

export default function LoginPage(){

    function login(){
        //do a request to backend to authenticate user based on rule
    }

    return(
        <>
            <Header />
            <Navbar />
            <LoginForm />
            <Footer />
        </>
    );
}