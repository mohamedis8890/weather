import React, { useState } from "react";

import Layout from "./common/Layout";
import SearchWeather from "./common/Search";
import MainView from "./components/main-view";
import MyCities from "./components/MyCities";
import { Grid } from "semantic-ui-react";

function App() {
  const [weatherData, setweatherData] = useState({});

  return (
    <Layout onweatherDataChange={setweatherData}>
      <SearchWeather />
      <Grid>
        <Grid.Row>
          <Grid.Column width="3">
            <MyCities />
          </Grid.Column>
          <Grid.Column width="13">
            <MainView weatherData={weatherData} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}

export default App;
