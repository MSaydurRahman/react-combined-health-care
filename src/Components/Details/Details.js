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
        <div className="details">
            <div className="container text-center text-danger">
                <h1>Service:{id}</h1>
                <br />
                <h2>{singleDetails?.name}</h2>
                <br />
                <h4>cost:${singleDetails?.cost}</h4>
                <br />
                <small>Description: {singleDetails?.description}</small>
                <hr />
                <p>Internists are physicians specializing in internal medicine, a discipline focused on the care of adults emphasizing use of the best medical science available in caring for patients in the context of thoughtful, meaningful doctor-patient relationships as exemplified by the life and work of Sir William Osler, the "father" of internal medicine in the United States.
                    At least three of their seven or more years of medical school and postgraduate training are dedicated to learning how to prevent, diagnose, and treat diseases that affect adults. This basic training qualifies them to practice internal medicine, and you may see these physicians referred to by several terms, including "internists" or "doctors of internal medicine." But don't mistake them with "interns," who are doctors in their first year of residency training. Internists are sometimes referred to as the "doctor's doctor," because they are often called upon to act as consultants to other physicians to help solve puzzling diagnostic problems.</p>
                <hr />
                <h1>{singleDetails?.location}</h1>
            </div>
        </div>
    );
};

export default Details;