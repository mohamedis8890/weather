import React from "react";
import { Grid, Card } from "semantic-ui-react";

export default function Main() {
  const cardItems = [
    {
      header: "Pressure",
      meta: "1000 hPa",
    },
    {
      header: "Humidity",
      meta: "54%",
    },
    {
      header: "Clouds",
      meta: "0%",
    },
    {
      header: "Wind",
      meta: "2.1 m/s Light breeze",
    },
  ];
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">icon</Grid.Column>
          <Grid.Column width="12">
            <Grid>
              <Grid.Row
                style={{
                  height: "1em",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                <h2>Daraw, EG</h2>
              </Grid.Row>
              <Grid.Row style={{ height: "1em" }}>
                <Grid.Column width="2">34॰C</Grid.Column>
                <Grid.Column width="14">Feels like : 43॰C</Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ height: "1em" }}>
                <Grid.Column>Main Weather condition</Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ height: "1em", marginBottom: "1em" }}>
                <Grid.Column width="2">Hi : 34॰C</Grid.Column>
                <Grid.Column width="14">Lo : 43॰C</Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="4"></Grid.Column>
          <Grid.Column width="12">
            <Grid>
              <Grid.Row>
                <Card.Group itemsPerRow="4" items={cardItems} />
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
