/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { directory } from './data';

export default function ClientList({ clients }) {
  return (
    <nav className="h-full overflow-y-auto" aria-label="Directory">

      <ul role="list" className="relative z-0 divide-y divide-gray-200">
        {clients.map((person) => (
          <li key={person.id} className="bg-white">
            <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
              <div className="flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {person.role}
                  </p>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
