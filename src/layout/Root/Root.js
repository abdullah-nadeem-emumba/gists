import React from "react";
import Container from "../AppContainer/Container";

export default function Root({ Header, Content }) {
  return (
    <div>
      <Header />
      <Container>
        <Content />
      </Container>
    </div>
  );
}
