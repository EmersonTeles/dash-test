import OrdersList from '../../components/orders';
import Sidebar from '../../components/sidebar';

export default function Pedidos() {
  return (
    <Sidebar>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl mb-5 font-semibold text-gray-900">Pedidos</h1>
        </div>
        <OrdersList />
      </div>
    </Sidebar>
  );
}
