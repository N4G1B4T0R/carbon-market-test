'use client';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppProvider } from '@/app/shared/store';
import { useRouter } from 'next/navigation';
export const AppHeader = () => {
  const { products } = useAppProvider();
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: '#000' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="white"
            onClick={() => router.push('/')}>
            CEEZER
          </Typography>
          <IconButton aria-label="cart" onClick={() => router.push('checkout')}>
            <Badge badgeContent={products?.length} color="error">
              <ShoppingCartIcon sx={{ color: '#FFF' }} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
