import React from 'react';
import { Container, Grid, Popover, Typography } from '@mui/material';
import Header from './header/Header';
import AnalyticsWebsiteVisits from './graphics/AnalyticsWebsiteVisits';
import GeneralBookingPage from './notices/notices';
import EcommerceNewProducts from './commerce/product';

const Home: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Container sx={{ marginTop: '10%' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3} lg={3}>
          {/* Card 1 */}
          <AnalyticsWebsiteVisits
            title="Digitro"
            subheader="Últimos 4 meses"
            chart={{
              labels: [
                '01/01/2022',
                '01/02/2022',
                '03/03/2022',
                '04/04/2022',
                
              ],
              series: [
                {
                  name: 'Funcionários na empresa',
                  type: 'area',
                  fill: 'gradient',
                  data: [500, 650, 660, 672],
                },
                {
                  name: 'Consumo de Água',
                  type: 'line',
                  fill: 'solid',
                  data: [300, 360, 340, 380],
                },
              ],
            }}
          />
 
        </Grid>

        <Grid item xs={6} md={3} lg={3}>
          {/* Card 2 */}
          <AnalyticsWebsiteVisits
            title="Grupo Almeida"
            subheader="Últimos 4 meses"
            chart={{
              labels: [
                '01/01/2022',
                '02/02/2022',
                '03/03/2022',
                '04/04/2022',
            
              ],
              series: [
                {
                  name: 'Funcionários na empresa',
                  type: 'area',
                  fill: 'gradient',
                  data: [550, 550,500, 513],
                },
                {
                  name: 'Consumo de Água',
                  type: 'line',
                  fill: 'solid',
                  data: [100, 100, 79, 84],
                },
              ],
            }}
          />
          
        </Grid>

        <Grid item xs={6} md={3} lg={3}>
          {/* Card 2 */}
          <AnalyticsWebsiteVisits
            title="Recicash"
            subheader="Últimos 4 meses"
            chart={{
              labels: [
                '01/01/2022',
                '02/02/2022',
                '03/03/2022',
                '04/04/2022',
           
              ],
              series: [
                {
                  name: 'Funcionários na empresa',
                  type: 'area',
                  fill: 'gradient',
                  data: [40, 40, 40, 40],
                },
                {
                  name: 'Consumo de Água',
                  type: 'line',
                  fill: 'solid',
                  data: [100, 90, 88, 77],
                },
              ],
            }}
          />
        </Grid>

        <Grid item xs={6} md={3} lg={3}>
          {/* Card 2 */}
          <AnalyticsWebsiteVisits
            title="Grupo Nexxera"
            subheader="Últimos 4 meses"
            chart={{
              labels: [
                '01/01/2022',
                '01/02/2022',
                '01/03/2022',
                '01/04/2022',
           
              ],
              series: [
                {
                  name: 'Funcionários na empresa',
                  type: 'area',
                  fill: 'gradient',
                  data: [4000, 4000, 4100, 4150],
                },
                {
                  name: 'Consumo de Água',
                  type: 'line',
                  fill: 'solid',
                  data: [1000, 900, 1100, 1150],
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
    <Container sx={{ marginTop: "15%" }} >
      <Grid container >
        <Grid item xs={12}>
          <EcommerceNewProducts />
        </Grid>
      </Grid>
    </Container>
    <Container sx={{ marginTop: "5%" }}>
      <Grid container >
      <Grid item xs={12}>
        <GeneralBookingPage />
      </Grid>
      </Grid>
    </Container>

    </Grid>
  );
};

export default Home;

