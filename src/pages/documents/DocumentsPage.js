import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import Card from "../../components/cards/Card";
import Navbar from "../../components/navbar/Navbar";

export default function DocumentsPage(){

    const [documents, setDocuments]=useState(null)

    async function fetchData(){
        const requestDocuments = await fetch('http://localhost:8080/pdf',
        {
          method:"GET"
        });
        const fetchedDocuments = await requestDocuments.json();
        setDocuments(fetchedDocuments);
        console.log(`Documents fetched: ${JSON.stringify(fetchedDocuments)}`);
        console.log("Saved documents to list:", documents)
//        userContext.setUserRoles(fetchedUserRoles)
      }

    useEffect(
        ()=>{
            fetchData();
       }, []);

    return(
        <>
        <Header />
        <Navbar />
        <Gallery children={
            documents 
            ? documents.map((document) => (
          <Card
             document={document}
            />
          ))
        : 
        <h1>Loading...</h1>} />
        <Footer />
        </>
    );
}