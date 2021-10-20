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

        <div className="container treatment">
            <div className="row">
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