import { useNavigate } from "react-router-dom";
import "./Card.css";

export default function Card({document}){

    console.log('document from inside card.', document)
    const navigate=useNavigate();

    function handleClick(id){
      navigate(`/documents/${id}`)
    }

    return(
    <div className="product-wrapper-div" key={document.id}  onClick={() => handleClick(document.id)}>
        <div>
            <img 
            className="product-image-style"
            src="https://www.computerhope.com/jargon/d/doc.png"
            alt="">
            </img>
        </div>
        <div className="product-description-div">
            <h3>{document.userEmail}</h3>
            <h3>{document.userName}</h3>
        </div>
    </div>
    );
}