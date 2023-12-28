import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const Training = (props) => {

    const [training] = useState(props.training);
    return (  
        <Card style={{width: "30rem", marginTop: "20px", height: "400px" }} >
        <Card.Img
          variant="top"
          src={`http://localhost:5000/images/${training.photo}`}
          style={{ maxHeight: "600px", width: "100%" , objectFit: "cover" }}

        />
        <Card.Body>
          <Card.Title>
            {training.libelle}
          </Card.Title>
          <Card.Text style={{ fontSize: "18px", color: "#af2f64" }} >{training.price} DT / Month</Card.Text>
        </Card.Body>
        </Card>
    );
}
export default Training;