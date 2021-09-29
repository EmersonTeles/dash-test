/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import ClientList from '../../components/clientList';
import SearchInput from '../../components/searchInput';
import AddClient from '../../components/addClient';
import api from '../../services/api';

const ClientsPage = () => {
  const [open, setOpen] = useState(false);
  const [clients, setClient] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await api.get("/d4jbs12tfon251/public/orders")


      setClient(response.data)
    }

    fetchOrders()

  }, [])

  return (
    <Sidebar>
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Clientes
            </h3>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full px-2 lg:px-6">
              <label htmlFor="search" className="sr-only">
                Search projects
              </label>
              <div className="relative text-indigo-200 focus-within:text-gray-400">
                <SearchInput />
              </div>
            </div>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Adicionar novo cliente
            </button>
          </div>
        </div>
      </div>
      <AddClient open={open} setOpen={setOpen} />
      <ClientList clients={clients} />
    </Sidebar>
  );
};

export default ClientsPage;
