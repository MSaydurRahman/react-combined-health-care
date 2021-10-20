import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Details.css"
const Details = () => {
    const { id } = useParams();

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('/conditions-and-diseases.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    console.log(details)
    const singleDetails = details.find(detail => detail.id == id)
    console.log(singleDetails)

    return (
        <div className="container">
            <div className="text-center details text-danger">
                <div>
                    <h1>Service:{id}</h1>
                    <br />
                    <div>
                        <h1>{singleDetails?.location}</h1>
                    </div>
                    <hr />
                    <h2>{singleDetails?.name}</h2>
                    <br />
                    <h4>cost:${singleDetails?.cost}</h4>
                    <br />
                    <small>Description: {singleDetails?.description}</small>
                </div>
                <hr />
                <div>
                    <p>Internists are physicians specializing in internal medicine, a discipline focused on the care of adults emphasizing use of the best medical science available in caring for patients in the context of thoughtful, meaningful doctor-patient relationships as exemplified by the life and work of Sir William Osler, the "father" of internal medicine in the United States.
                    </p>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Details;