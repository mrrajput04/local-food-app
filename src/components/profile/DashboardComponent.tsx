import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useOrderHistory } from '@/contexts/OrderHistoryContext';

function DashboardComponent() {
  const { user, logout } = useAuth();
  const { items, addItem } = useCart();
  const { favorites, addFavorite } = useFavorites();
  const { orders } = useOrderHistory();

  return (
    <div className="p-6">
      {/* User Information */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h2>
        <button 
          onClick={logout}
          className="bg-farm-green text-white px-4 py-2 rounded hover:bg-farm-green-dark"
        >
          Logout
        </button>
      </div>

      {/* Cart Summary */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Cart ({items.length} items)</h3>
        <ul className="space-y-2">
          {items.map(item => (
            <li key={item.id} className="flex justify-between items-center">
              <span>{item.name}</span>
              <span>Quantity: {item.quantity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Favorites */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Favorites ({favorites.length})</h3>
        <ul className="space-y-2">
          {favorites.map(favorite => (
            <li key={favorite.id}>{favorite.name}</li>
          ))}
        </ul>
      </div>

      {/* Order History */}
      <div>
        <h3 className="text-xl font-semibold mb-3">Recent Orders</h3>
        <ul className="space-y-2">
          {orders.map(order => (
            <li key={order.id} className="flex justify-between items-center">
              <span>Order #{order.id}</span>
              <span>Status: {order.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardComponent;