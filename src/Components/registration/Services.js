import React, { useEffect, useState } from 'react';
import Area from '../Area/Area';
import "./Services.css"
const Services = () => {
    const [areas, setAreas] = useState([])
    useEffect(() => {
        fetch('./conditions-and-diseases.json')
            .then(res => res.json())
            .then(data => setAreas(data))
    }, [])
    return (
        <div className="container services">
            <div className="row">
                {
                    areas.map(area => <Area
                        key={area.id}
                        area={area}
                    >
                    </Area>)
                }
            </div>
        </div>
    );
};

export default Services;