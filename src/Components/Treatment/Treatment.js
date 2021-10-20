import React, { useEffect, useState } from 'react';
import TreatArea from '../TreatArea/TreatArea';
import "./Treatment.css"
const Treatment = () => {
    const [areas, setAreas] = useState([])
    useEffect(() => {
        fetch('/details.json')
            .then(res => res.json())
            .then(data => setAreas(data.details))
    }, [])
    return (

        <div className="container">
            <div className="Corona text-center bg-dark text-white p-4 my-4 rounded">
                <h3>Coronavirus disease
                </h3>
                <h4>
                    Treatments</h4>
                <h5>Self care</h5>
                <p>After exposure to someone who has COVID-19, do the following:
                    Call your health care provider or COVID-19 hotline to find out where and when to get a test.
                    Cooperate with contact-tracing procedures to stop the spread of the virus.
                    If testing is not available, stay home and away from others for 14 days.
                    While you are in quarantine, do not go to work, to school or to public places. Ask someone to bring you supplies.
                    Keep at least a 1-metre distance from others, even from your family members.
                    Wear a medical mask to protect others, including if/when you need to seek medical care.
                    Clean your hands frequently.
                    Stay in a separate room from other family members, and if not possible, wear a medical mask.
                    Keep the room well-ventilated.
                    If you share a room, place beds at least 1 metre apart.
                    Monitor yourself for any symptoms for 14 days.
                    Call your health care provider immediately if you have any of these danger signs: difficulty breathing, loss of speech or mobility, confusion or chest pain.
                    Stay positive by keeping in touch with loved ones by phone or online, and by exercising at home.</p>
                <h5>Medical treatments</h5>
                <p>Scientists around the world are working to find and develop treatments for COVID-19.
                    Optimal supportive care includes oxygen for severely ill patients and those who are at risk for severe disease and more advanced respiratory support such as ventilation for patients who are critically ill.
                    Dexamethasone is a corticosteroid that can help reduce the length of time on a ventilator and save lives of patients with severe and critical illness.</p>
            </div>
            <div className="row treatment">
                {
                    areas.map(area => <TreatArea
                        key={area.id}
                        area={area}
                    >
                    </TreatArea>)
                }
            </div>

        </div>
    );
};

export default Treatment;