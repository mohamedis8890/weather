import React from "react";
import { Container } from "semantic-ui-react";
import SearchWeather from "./Search";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <SearchWeather />
      {children}
    </Container>
  );
}
