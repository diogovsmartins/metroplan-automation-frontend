import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import DetailedCardView from "../../components/cards/detailedCardView/DetailedCardView";

export default function SinglePageDocument(){

    const locationData=useLocation();

    return(
       <>
       <Header />
       <Navbar />
        <DetailedCardView pdf={locationData.state} />
       <Footer />
       </> 
    );
}