/* eslint-disable react/prop-types */
export default function BudgetList({ itemsList, removeItem }) {
  function deleteItem(index) {
    removeItem(index);
  }
  return (
    <div className="flex flex-col mt-5">
      <div className="-my-2  sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
                  >
                    Produto
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
                  >
                    Quantidade
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
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
                      key={item.itemId}
                      className={itemId % 2 === 0 ? 'bg-white' : 'bg-gray-100 '}
                    >
                      <td className="px-2 py-4 whitespace-wrap text-sm overflow-ellipsis font-medium text-gray-900">
                        {item.item}
                      </td>
                      <td className="px-2 py-4 whitespace-wrap text-sm text-gray-500">
                        {item.quantity} un
                      </td>
                      <td className="px-2 py-4 whitespace-wrap text-sm text-gray-500">
                        R${item.price}
                      </td>
                      <td className="px-2 py-4 whitespace-wrap text-center text-sm font-medium">
                        <button
                          type="button"
                          onClick={() => deleteItem(itemId)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Delete
                        </button>
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
