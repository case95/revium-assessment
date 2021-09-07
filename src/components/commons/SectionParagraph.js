import React from "react";
import { Container } from "react-bootstrap";

const SectionParagraph = ({ title, paragraph }) => {
  return (
    <Container className="py-4 ">
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </Container>
  );
};

export default SectionParagraph;
