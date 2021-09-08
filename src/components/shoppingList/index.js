/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ShoppingList({ itemsList }) {
  return (
    <div className="flex flex-col mt-5">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Produto
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantidade
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Preço
                  </th>
                  <th scope="col" className="relative px-2 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              {itemsList && (
                <tbody>
                  {itemsList.map((item, itemId) => (
                    <tr
                      key={item.item}
                      className={itemId % 2 === 0 ? 'bg-white' : 'bg-gray-100 '}
                    >
                      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.item}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.quantity} un
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                        R${item.price}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
