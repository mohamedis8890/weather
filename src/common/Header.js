import React from "react";
import { Header as UIHeader, Image } from "semantic-ui-react";

export default function Header() {
  return (
    <UIHeader as="h1">
      <Image src="https://www.clipartmax.com/png/small/0-8774_medium-image-weather-symbols.png" />
      WeatherApp
    </UIHeader>
  );
}
