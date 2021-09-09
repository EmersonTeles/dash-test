/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
const pedidos = [
  {
    id: "#2245",
    cliente: "Jânio Quadros",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    data: "24/08/2021",
    email: "janio.quadros@planalto.gov",
    image:
      "https://cpdoc.fgv.br/sites/default/files/imagens/dossies/nav_jgoulart/fotos/Modulo2/CCfoto155.jpg",
    status: "concluído",
  },
  {
    id: "#2246",
    cliente: "Getúlio Vargas",
    title: "Ditador",
    department: "Optimization",
    data: "28/08/2021",
    email: "getulio.vargas@planalto.gov",
    image:
      "https://espacodemocratico.org.br/wp-content/uploads/2020/09/get.jpg",
    status: "em andamento",
  },
  {
    id: "#2247",
    cliente: "Juscelino Kubitschek",
    title: "Presidente",
    department: "Optimization",
    data: "31/08/2021",
    email: "juscelino.kubitschek@planalto.gov",
    image:
      "https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2019/08/24/778872/20190823195545417119i.JPG",
    status: "cancelado",

  },
];

export default function OrdersList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Cliente
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Fornecedor
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Data
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Detalhes</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pedidos.map((pedido) => (
                    <tr key={pedido.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{pedido.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={pedido.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {pedido.cliente}
                            </div>
                            <div className="text-sm text-gray-500">
                              {pedido.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {pedido.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {pedido.department}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            pedido.status === 'concluído'
                              ? 'bg-green-100 text-green-800'
                              : pedido.status === 'em andamento'
                              ? 'bg-yellow-100 text-yellow-900'
                              : 'bg-red-100 text-red-900'

                          }`}
                        >
                          {pedido.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                        {pedido.data}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Detalhes
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
