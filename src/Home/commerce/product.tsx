// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Button, CardContent, Typography, CardProps } from '@mui/material';
// utils
import { bgGradient } from '../../utils/cssStyles';
// components


// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  position: 'absolute',
}));

// ----------------------------------------------------------------------

type ItemProps = {
  id: string;
  image: string;
  name: string;
};



export default function EcommerceNewProducts() {
  const theme = useTheme();


  return (
    <Box sx={{ position: 'relative' }}>
      <CardContent
        sx={{
          left: 0,
          bottom: 0,
          zIndex: 9,
          maxWidth: '80%',
          position: 'absolute',
          color: 'black',

        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.48 }}>
        Descubra o poder da transparência ESG. Mostre suas ações sustentáveis, promova seu impacto e alavanque seu sucesso. Junte-se a nós e construa um futuro melhor!
        </Typography>

        <Typography noWrap variant="h5" sx={{ mt: 1, mb: 3 }}>
         
        </Typography>

        <Button variant="contained" sx={{background: "green",
             "&:hover": {
                background: "darkgreen"}
    }}>Adquira agora</Button>
      </CardContent>

      <StyledOverlay />

     
    </Box>
  );
}
