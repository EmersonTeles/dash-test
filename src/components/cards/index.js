/* This example requires Tailwind CSS v2.0+ */
const items = [
  { id: 1, title: "Relatório de vendas" },

  // More items...
];

export default function Example() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="bg-white mb-5 mt-5 shadow overflow-hidden px-4 py-2 h-80  sm:rounded-md"
        >
          <h1 className="text-xl text-left font-bold text-gray-500">
            {item.title}
          </h1>
        </li>
      ))}
    </ul>
  );
}
