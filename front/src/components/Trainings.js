import axios from "axios";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Training from "./Training";

const Trainings = () => {
    const [trainings, setTrainings] = React.useState([]);

    const getTrainings = async () => {
        try {
        const response = await axios.get("http://localhost:5000/trainings");
        console.log(response.data);
        setTrainings(response.data);
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      getTrainings();
    }, []);
    return (
        <>
        <Container>
        
            <Row style={{margin: "20px" }}>
                <Col>
                    <h1 className="title">Discover Our Courses</h1>
                </Col>
                <Col className="text-end">
                <a href="#" className="button">View More</a>
                </Col>
            </Row>
            <Row className="justify-content-center">
            {trainings && trainings.map((element,index)=>
                <Col key={index}  xs={12} sm={6} md={4} >
                  <Training training={element}/>
                </Col>
            )}
         </Row>
        </Container>
        </>
    ); 
}
export default Trainings;