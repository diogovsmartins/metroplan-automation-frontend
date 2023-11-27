import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RegistrationForm from "../../components/forms/registrationForm/RegistrationForm";

export default function RegistrationPage(){

    function login(){
        //do a request to backend to authenticate user based on rule
    }

    return(
        <>
            <Header />
            <RegistrationForm />
            <Footer />
        </>
    );
}