import Card from "../Card";
import "../detailedCardView/DetailedCardView.css"
export default function DetailedCardView({document}){

    console.log("document from inside detailed card view:", document);

    return (
        <div id="detailed-card-view-style">
            <div id="image-div">
                <img
                id="image-style" 
                src={`data:image/png;base64,${document.base64Image}`}
                alt="Portrait of the generated presenciality declaration."
                />
            </div>
            <div id="details-style-div">
                <button id="download-button-style">Download</button>
            </div>
        </div>
    );
}