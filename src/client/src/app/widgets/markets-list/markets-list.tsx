import { getMarkets } from './query';
import { Card } from '@/app/features';
import { Box } from '@mui/material';

export async function MarketList() {
  const { markets } = await getMarkets();

  return (
    <Box
      sx={{
        display: 'grid',
        justifyItems: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gridGap: 20
      }}>
      {markets.map((market) => (
        <Card key={market.id} {...market} />
      ))}
    </Box>
  );
}
