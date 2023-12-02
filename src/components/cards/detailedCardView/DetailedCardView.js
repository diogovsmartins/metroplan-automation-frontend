import { saveAs } from "file-saver";
import "../detailedCardView/DetailedCardView.css"
export default function DetailedCardView({pdf}){

    async function downloadPdf(){
        const fetchPdf= await fetch(`http://localhost:8080/pdf/${pdf.id}`);
        const responsePdf = await fetchPdf.blob();
        console.log('test', `http://localhost:8080/pdf/${pdf.id}`)
        saveAs(responsePdf, 'generatedDeclaration.pdf');
    }

    return (
        <div id="detailed-card-view-style">
            <div id="image-div">
                <img
                id="image-style" 
                src={`data:image/png;base64,${pdf.base64Image}`}
                alt="Portrait of the generated presenciality declaration."
                />
            </div>
            <div id="details-style-div">
                <button id="download-button-style" onClick={downloadPdf}>Download</button>
            </div>
        </div>
    );
}