import React, { useContext } from "react";
import "./OneSection.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { globalContext } from "../../../context/GlobalProvider";

const OneSection = () => {
  const { allData, mode , loading} = useContext(globalContext);

  return (
    <section
      className={`d-flex flex-wrap gap-3 p-4 justify-content-center ${
        mode ? "dark" : null
      }`}
    >
      {loading? "loading...":  allData.map((item) => {
        return (
          <Card key={item.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </section>
  );
};

export default OneSection;
