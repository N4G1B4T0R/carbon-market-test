'use client';
import { useState } from 'react';
import {
  Button,
  TextField,
  CardContent,
  CardMedia,
  Typography,
  Card as MUICard,
  Grow,
  Box,
  Divider,
  Grid
} from '@mui/material';
import { useAppProvider } from '@/app/shared/store';
import { IProduct } from '@/app/shared/types';

export const Card = (props: IProduct) => {
  const { addProduct } = useAppProvider();
  const [count, setCount] = useState(1);
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
      <MUICard
        sx={{
          width: {
            xs: '100%',
            md: 320
          }
        }}>
        <CardMedia
          component="img"
          loading="lazy"
          height="288"
          image={props?.image}
          alt={props?.name}
        />
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item xs={12}>
              <Typography noWrap gutterBottom variant="h5" component="div">
                {props?.name}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            gutterBottom
            color="text.secondary"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              height: 60,
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical'
            }}>
            {props?.description || 'No Date'}
          </Typography>
          <Box component={Divider} mt={2} mb={2}></Box>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body1" component="div">
                Price per ton ${props.price_per_ton}
              </Typography>
              <Typography variant="body2" component="div">
                Max {props.offered_volume_in_tons}
              </Typography>
            </Grid>
            <TextField
              type="number"
              InputProps={{ inputProps: { min: 1, max: props.offered_volume_in_tons } }}
              variant="outlined"
              value={count}
              onChange={(e) => {
                const val = +e.target.value;
                if (val >= props.offered_volume_in_tons) return null;
                setCount(val);
              }}
              size={'small'}
              sx={{
                width: 70
              }}
            />
          </Grid>
          <Box component={Divider} mt={2} mb={2}></Box>
          <Button variant="contained" fullWidth onClick={() => addProduct!({ ...props, count })}>
            Add to basket
          </Button>
        </CardContent>
      </MUICard>
    </Grow>
  );
};
