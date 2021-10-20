import React from 'react';
import { Link } from 'react-router-dom';
import "./Area.css"
const Area = (props) => {
    const { id, name, description, img } = props.area
    return (

        <div className="col-lg-6 col-md-6 col-sm-12 g-4">
            <div className=" card border border-1 border-success">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center text-danger">{name}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/details/${id}`} className="text-center">
                        <button className="btn btn-primary btn-lg fa fa-superpowers">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Area;