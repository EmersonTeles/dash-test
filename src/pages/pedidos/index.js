/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import CreateOrderButton from '../../components/createOrderButton';
import CreateOrderSection from '../../components/createOrderSection';
import FilterButton from '../../components/filterButton';
import Table from '../../components/table';
import SearchInput from '../../components/searchInput';
import Sidebar from '../../components/sidebar';
import { headTable } from './data';
import api from '../../services/api';

export default function Pedidos() {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  function toggleModal() {
    setOpen(!open);
  }

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await api.get('/d4jbs12tfon251/public/orders');
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  return (
    <Sidebar>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl font-semibold text-gray-900">Pedidos</h1>
          <p className="text-gray-500">Lista de pedidos Material Agora</p>
        </div>
        <div className="flex flex-wrap max-w-7xl mx-auto items-center mt-5 mb-5 px-4 sm:px-6 md:px-8 gap-4">
          <SearchInput />
          <FilterButton />
          <CreateOrderButton
            title="Novo Pedido"
            onClick={() => toggleModal()}
          />
        </div>
        <Table headTable={headTable} headBody={orders} />
      </div>
      <CreateOrderSection
        OnClose={() => toggleModal()}
        open={open}
        setOpen={setOpen}
      />
    </Sidebar>
  );
}
