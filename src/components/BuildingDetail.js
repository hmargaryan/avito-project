import React, { useState, useEffect } from 'react';
import '../App.css';
import Carousel from './Carousel';
import axios from "axios";

const BuildingDetail = (props) => {
    useEffect(() => {
        fetchBuilding();
    }, [])

    const [building, setBuilding] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchBuilding = async () => {
        const data = await axios.get(`http://134.209.138.34/item/${props.match.params.id}`);
        await setBuilding(data.data[0]);
        setIsLoaded(true);
    }

    return (
        <React.Fragment>
            <div className="title__and__price">
                <h1>{ building.title }</h1>
                <h1>{ building.price }</h1>
            </div>

            <div>
            {
                isLoaded ? (
                    <Carousel images={ building.images }/>
                ) : <h3>Loading...</h3>
            }

            </div>

            <hr/>

            <div className="seller__and__address">
                <h3>Продавец: { building.sellerName }</h3>
                <h3>Адрес: { building.address }</h3>
            </div>

            <hr/>

            <p className="description">{ building.description }</p>
        </React.Fragment>
    )
}

export default BuildingDetail;