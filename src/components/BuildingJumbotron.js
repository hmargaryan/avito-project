import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from "react-bootstrap/Jumbotron";

const BuildingJumbotron = () => {
    return (
        <Jumbotron fluid className="mt-3">
            <Container>
                <h1>Недвижимость</h1>
                <p>
                    Avito — сайт частных объявлений
                    № 1 в России
                </p>
            </Container>
        </Jumbotron>
    )
}

export default BuildingJumbotron;