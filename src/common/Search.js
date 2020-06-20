import React, { useState, useEffect } from "react";

import { Form, Button, Grid } from "semantic-ui-react";

export default function SearchWeather() {
  const apiKey = "e29d8a838fcaecb459109dbad455a20b";
  const [term, setTerm] = useState("daraw");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    console.log(term);
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
    };

    fetchWeather();
  }, [term]);
  return (
    <div>
      <Form>
        <Grid>
          <Grid.Row>
            <Grid.Column width="12">
              <Form.Field>
                <input
                  placeholder="Search for a city to see it's weather data"
                  name="term"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width="4">
              <Form.Field>
                <Button
                  type="submit"
                  content="Add to My cities"
                  color="blue"
                  icon="add circle"
                ></Button>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </div>
  );
}
