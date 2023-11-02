import { Image } from "react-bootstrap";

const FeatureItem = ({ dataTitle, dataRole, dataBio, dataImage }) => {
  return (
    <div className="card mb-5">
      <Image src={dataImage} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{dataTitle}</h5>
        <p>{dataRole}</p>
        <p className="card-text">{dataBio}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default FeatureItem;
