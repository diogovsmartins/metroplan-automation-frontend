import './Gallery.css';

export default function Gallery({ children }) {

  return (
    <div id="gallery-div">
      <div id="gallery-content-wrapper">
        <div id="gallery-product-card-div">
          {children}
        </div>
      </div>
    </div>
  );
}