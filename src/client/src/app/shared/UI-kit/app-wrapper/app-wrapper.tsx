import { ReactNode, FC } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

import { AppHeader } from '../app-header';

export const AppWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Box width="100%" height="100vh">
    <Box height="60%">
      <Box
        sx={{
          position: 'absolute',
          backgroundImage: "url('https://www.spacex.com/static/images/starshield/hero.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundColor: '#000',
          backgroundSize: 'cover',
          height: '60%',
          width: '100%'
        }}
      />
      <AppHeader />
      <Container>
        <Grid container>
          <Grid item xs={12} md={5} position="relative" mt={16}>
            <Typography color="white" variant="h3" mb={3} sx={{ typography: { xs: 'h4' } }}>
              Impactful climate action
            </Typography>
            <Typography color="white" variant="h6">
              Using CEEZER connects carbon credit buyers and vetted global climate project
              developers to efficiently manage credit portfolios for optimal impact.
              <br />
              <br />
              Close partnerships with leading universities and rating providers, data from project
              validation and certification, and in-house research ensures that buyers have objective
              criteria about their portfolio and any potential risks related to specific purchases.
              <br />
              <br />
              Helping pave your path to a credible net-zero economy.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Container>{children}</Container>
  </Box>
);
