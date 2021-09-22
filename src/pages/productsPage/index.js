/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'

import Sidebar from '../../components/sidebar'
import SearchInput from '../../components/searchInput'
import FilterButton from '../../components/filterButton'
import CreateOrderButton from '../../components/createOrderButton'
import CreateOrderSection from '../../components/createOrderSection'
import SelectMenu from '../../components/selectMenu'


const products = [
    { 
        ID: '1',
        name: "Tijolo",
        stock: '15',
        price: 'R$ 12.49',
        category: 'Material',
    },
    { 
        ID: '2',
        name: "Argamassa",
        stock: '12',
        price: 'R$ 7.69',
        category: 'Material',
    },
    { 
        ID: '3',
        name: "Lampada",
        stock: '10',
        price: 'R$ 5.99',
        category: 'Elétrica',
    },
    // More people...
  ]


export default function Products() {
    const [open, setOpen] = useState(false);
    function toggleModal() {
      setOpen(!open);
    }
    return (    
        <Sidebar>
            <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-4xl font-semibold text-gray-900">Produtos</h1>
                <p className="text-gray-500">Lista de produtos Material Agora</p>
            </div>
            <div className="flex flex-wrap max-w-7xl mx-auto items-center mt-5 mb-5 px-4 sm:px-6 md:px-8 gap-4">
                <SearchInput />
                <FilterButton />
                <CreateOrderButton title={"Novo Produto"} onClick={() => toggleModal()} />
            </div>
            </div>
            <CreateOrderSection
            OnClose={() => toggleModal()}
            open={open}
            setOpen={setOpen}
            />
            <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nome
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Estoque
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Preço
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Categoria
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Fornecedor
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.ID}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                    <SelectMenu />
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
        </Sidebar>
    )
    
}
