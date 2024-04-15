import { Box, Typography } from '@mui/material';
import { Basket } from '@/app/widgets';

export default function Checkout() {
  return (
    <main>
      <Box mt={4} mb={4}>
        <Typography variant="h3" align="center">
          Checkout
        </Typography>
      </Box>
      <Basket />
      <Box pt={8} />
    </main>
  );
}
