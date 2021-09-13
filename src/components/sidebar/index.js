/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import {
  ViewGridIcon,
  CashIcon,
  CogIcon,
  ShoppingCartIcon,
  TruckIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  XIcon,
  MenuIcon,
} from '@heroicons/react/outline';

export default function Sidebar({ children }) {
  const navigation = [
    {
      name: 'Visão geral',
      href: '/',
      icon: ViewGridIcon,
      current: true,
    },
    {
      name: 'Pedidos',
      href: '/pedidos',
      icon: ShoppingCartIcon,
      current: false,
    },
    {
      name: 'Clientes',
      href: '/clientes',
      icon: UserGroupIcon,
      current: false,
    },
    {
      name: 'Fornecedores',
      href: '/fornecedores',
      icon: TruckIcon,
      current: false,
    },
    {
      name: 'Produtos',
      href: '/produtos',
      icon: ShoppingBagIcon,
      current: false,
    },
    {
      name: 'Financeiro',
      href: '/financeiro',
      icon: CashIcon,
      current: false,
    },
    {
      name: 'Configurações',
      href: '/configurações',
      icon: CogIcon,
      current: false,
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Fechar sidebar</span>

                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      exact
                      to={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                      )}
                      activeClassName="bg-green-100 text-gray-900"
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-4 flex-shrink-0 h-6 w-6',
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQHzGGGXhqO1gw/profile-displayphoto-shrink_200_200/0/1610651528842?e=1635984000&v=beta&t=1zdt0mdBlyQrSvjkV5SMmV2AjnNXMFWBZbT6vysBsR8"
                        alt="Foto de perfil"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                        Bruna Bertino
                      </p>
                      <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                        Ver perfil
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="pt-6 pb-6 flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://avatars.githubusercontent.com/u/54421630?v=4"
                      alt="Foto de perfil"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      Emerson Teles
                    </p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                      Ver perfil
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
              <nav className="flex-1 px-2 bg-white space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    exact
                    to={item.href}
                    className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    activeClassName="bg-blue-100 text-blue-900"
                  >
                    <item.icon
                      className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
                      aria-hidden="true"
                    />
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="flex md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
    </div>
  );
}
