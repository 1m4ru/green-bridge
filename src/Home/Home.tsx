import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Header from './header/Header';
import AnalyticsWebsiteVisits from './graphics/AnalyticsWebsiteVisits';
import GeneralBookingPage from './notices/notices';

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
            title="Empresa 1"
            subheader="Últimos 12 meses"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                
              ],
              series: [
                {
                  name: 'Funcionários na empresa',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67],
                },
                {
                  name: 'Consumo de Água',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30],
                },
              ],
            }}
          />
        </Grid>

        <Grid item xs={6} md={3} lg={3}>
          {/* Card 2 */}
          <AnalyticsWebsiteVisits
            title="Empresa 2"
            subheader="Últimos 12 meses"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
            
              ],
              series: [
                {
                  name: 'Funcionários na empresa',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67],
                },
                {
                  name: 'Consumo de Água',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30],
                },
              ],
            }}
          />
        </Grid>

        <Grid item xs={6} md={3} lg={3}>
          {/* Card 2 */}
          <AnalyticsWebsiteVisits
            title="Empresa 2"
            subheader="Últimos 12 meses"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
           
              ],
              series: [
                {
                  name: 'Funcionários na empresa',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67],
                },
                {
                  name: 'Consumo de Água',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30],
                },
              ],
            }}
          />
        </Grid>

        <Grid item xs={6} md={3} lg={3}>
          {/* Card 2 */}
          <AnalyticsWebsiteVisits
            title="Empresa 2"
            subheader="Últimos 12 meses"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
           
              ],
              series: [
                {
                  name: 'Funcionários na empresa',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67],
                },
                {
                  name: 'Consumo de Água',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30],
                },
              ],
            }}
          />
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

