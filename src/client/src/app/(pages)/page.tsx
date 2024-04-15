import { Suspense } from 'react';
import { MarketList } from '../widgets';
import { Box, Typography } from '@mui/material';

export default async function Home() {
  return (
    <main>
      <Box mt={4} mb={4}>
        <Typography variant="h3" align="center">
          Products
        </Typography>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <MarketList />
      </Suspense>
      <Box pt={8} />
    </main>
  );
}
