import { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import ClientList from '../../components/clientList';
import SearchInput from '../../components/searchInput';
import AddStore from '../../components/addStore';
import api from '../../services/api';

export default function Fornecedores() {
  const [open, setOpen] = useState(false);
  const [supllier, setSupplier] = useState([]);

  useEffect(async () => {
    const fetchOrders = async () => {
      const response = await api.get(
        '/d4jbs12tfon251/public/construction_sites',
      );
      setSupplier(response.data);
    };
    fetchOrders();
  }, []);

  return (
    <Sidebar>
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Fornecedores
            </h3>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full px-2 lg:px-6">
              <div className="relative text-indigo-200 focus-within:text-gray-400">
                <SearchInput />
              </div>
            </div>
          </div>
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cadastrar novo fornecedor
            </button>
          </div>
        </div>
      </div>
      <AddStore open={open} setOpen={setOpen} />
      <ClientList clients={supllier} />
    </Sidebar>
  );
}
