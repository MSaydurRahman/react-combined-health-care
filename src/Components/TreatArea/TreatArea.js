import React from 'react';
import "./TreatArea.css"
const TreatArea = (props) => {
    const { name, description, img } = props.area
    return (

        <div className="col-lg-6 col-md-6 col-sm-12 g-4 treatment">
            <div className=" container card border border-1 border-success">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center text-danger">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default TreatArea;