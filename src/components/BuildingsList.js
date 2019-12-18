import React, { useState, useEffect } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import BuildingJumbotron from "./BuildingJumbotron";

const BuildingsList = () => {
    useEffect(() => {
        fetchBuildings();
    }, [])

    const [buildings, setBuildings] = useState([]);

    const fetchBuildings = async () => {
        const data = await fetch('http://134.209.138.34/items');
        const buildings = await data.json();
        console.log(buildings);
        setBuildings(buildings);
    }

    return (
        <React.Fragment>
            <BuildingJumbotron />

            <Row style={{ margin: '0 auto' }}>
            {
                buildings.map(building => {
                    return (
                        <Col className="mt-4" key={ building.id }>
                            <Card bg="light" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ building.previewImage } />
                                <Card.Body>
                                    <Card.Title>{ building.title }</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{ building.price }</Card.Subtitle>
                                    <Card.Text><FontAwesomeIcon icon={ faMapMarkerAlt } /> &nbsp; { building.address }</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
            </Row>
        </React.Fragment>
    )
}

export default BuildingsList;