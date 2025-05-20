import { ReactNode } from 'react';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';
import { FavoritesProvider } from './FavoritesContext';
import { OrderHistoryProvider } from './OrderHistoryContext';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <OrderHistoryProvider>
            {children}
          </OrderHistoryProvider>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}