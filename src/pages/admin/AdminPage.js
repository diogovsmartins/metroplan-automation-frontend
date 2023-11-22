import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";

export default function AdminPage(){
    return(
        <>
            <Header />
            <Navbar />
            <Gallery/>
            <Footer />
        </>
    );
}