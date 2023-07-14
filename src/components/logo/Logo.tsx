import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, BoxProps } from '@mui/material';

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 40,
          height: 40,
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        <img
          src="/src/img/logo.png" // Altere o caminho para o seu arquivo PNG
          alt="Logo"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} to="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;