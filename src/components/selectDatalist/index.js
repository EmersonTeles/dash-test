/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

export default function Datalist({ list, label, name }) {
  const inputId = `id_${name}`;
  const listId = `list_${name}`;
  return (
    <div className="mb-5">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        list={listId}
        id={inputId}
        className="mt-1 shadow-md block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      />
      <datalist id={listId}>
        {list.map((cliente) => {
          return <option>{cliente}</option>;
        })}
      </datalist>
    </div>
  );
}
