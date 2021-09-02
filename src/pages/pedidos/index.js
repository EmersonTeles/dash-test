/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import CreateOrderButton from '../../components/createOrderButton';
import FilterButton from '../../components/filterButton';
import OrdersList from '../../components/orders';
import SearchInput from '../../components/searchInput';
import Sidebar from '../../components/sidebar';

export default function Pedidos() {
  return (
    <Sidebar>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl mb-5 font-semibold text-gray-900">Pedidos</h1>
          <p className="text-gray-500">Lista de pedidos Material Agora</p>
        </div>
        <div className="flex flex-wrap items-center mt-5 mb-5 px-4 sm:px-6 md:px-8 gap-4">
          <SearchInput />
          <FilterButton>Filtro</FilterButton>
          <CreateOrderButton />
        </div>
        <OrdersList />
      </div>
    </Sidebar>
  );
}
