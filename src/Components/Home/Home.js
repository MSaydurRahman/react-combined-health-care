import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Area from '../Area/Area';
import "./Home.css"
const Home = () => {
    const [areas, setAreas] = useState([])
    const cartSlice = areas.slice(-6)
    useEffect(() => {
        fetch('/conditions-and-diseases.json')
            .then(res => res.json())
            .then(data => setAreas(data))
    }, [])
    return (
        <div className="container home">
            <About></About>
            <div className="row">
                {
                    cartSlice.map(area => <Area
                        key={area.id}
                        area={area}
                    >
                    </Area>)
                }
            </div>
        </div>
    );
};

export default Home;