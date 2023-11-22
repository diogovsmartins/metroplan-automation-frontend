import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import RegistrationForm from "../../components/form/registrationForm/RegistrationForm";

export default function RegistrationPage(){

    function login(){
        //do a request to backend to authenticate user based on rule
    }

    return(
        <>
            <Header />
            <Navbar />
            <RegistrationForm />
            <Footer />
        </>
    );
}