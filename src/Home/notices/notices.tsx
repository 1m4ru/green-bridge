import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// _mock_
import { _bookings, _bookingNew, _bookingsOverview, _bookingReview } from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
import BookingCustomerReviews from './BookingCustomerReviews';
// sections

// assets


// ----------------------------------------------------------------------

export default function GeneralBookingPage() {
  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
   

   <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <BookingCustomerReviews
              title="ISO 9001"
              subheader="Aprenda mais sobre a ISO 9001"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer..."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BookingCustomerReviews
              title="ISO 14001"
              subheader="Aprenda mais sobre a ISO 14001"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer..."
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}



