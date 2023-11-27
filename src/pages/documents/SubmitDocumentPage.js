import Footer from "../../components/footer/Footer";
import DocumentSubmissionForm from "../../components/forms/documentSubmissionForm/DocumentSubmissionForm";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

export default function SubmitDocumentPage(){
    return(
        <>
        <Header />
        <Navbar />
        <DocumentSubmissionForm />
        <Footer />
        </>
    );
}