'use client';
import { useAppProvider } from '@/app/shared/store';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
export function Basket() {
  const { products } = useAppProvider();

  return (
    <Box>
      {products.map((product) => (
        <Box mt={3}>
          <Paper component={Box} p={2}>
            <Grid container justifyItems="center">
              <Grid item xs={2} alignSelf="center">
                <Box display="flex" justifyContent="center">
                  <img src={product.image} alt={product.name} width={100} height={100} />
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Typography noWrap gutterBottom variant="h5" component="div">
                  {product?.name}
                </Typography>
                <Typography variant="body2" gutterBottom color="text.secondary">
                  {product?.description}
                </Typography>
                <Typography variant="body1" component="div">
                  Price per ton ${product.price_per_ton}
                </Typography>
              </Grid>
              <Grid item xs={2} alignSelf="center" justifyItems="center">
                <Box display="flex" justifyContent="center">
                  <Typography variant="body1" component="div">
                    Use selected: {product.count}
                  </Typography>{' '}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ))}

      {products?.length ? (
        <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained">Checkout</Button>
        </Box>
      ) : (
        <Typography variant="body1" component="div">
          Please add product to the basket
        </Typography>
      )}
    </Box>
  );
}
