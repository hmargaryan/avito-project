import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from "axios";

const BuildingsList = () => {
    useEffect(() => {
        fetchBuildings();
    }, [])

    const [buildings, setBuildings] = useState([]);

    const fetchBuildings = async () => {
        const data = await axios.get('http://134.209.138.34/items');
        setBuildings(data.data);
    }

    return (
        <div className="cards">
            {
                buildings.map(building => {
                    return (
                        <div key={ building.id } className="card">
                            <Link to={ `/${building.id}` }><img src={ building.previewImage } alt={ building.id }/></Link>
                            <div className="card__content">
                                <Link to={ `/${building.id}` }><span>{ building.title }</span></Link>
                                <h4>{ building.price }</h4>
                                <p>{ building.address }</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BuildingsList;