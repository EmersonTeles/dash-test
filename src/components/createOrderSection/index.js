/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import { useState, Fragment, useDebugValue } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Input from '../Input';
import Datalist from '../datalist';
import { clientList } from './data';
import CreateItem from '../createItem';
import BudgetList from '../budgetList';

export default function CreateOrderSection({ OnClose, open, setOpen }) {
  const itemsList = [];
  const [items, setItems] = useState(itemsList);

  function addItem(event, values) {
    event.preventDefault();
    event.stopPropagation();
    setItems((arr) => [...arr, values]);
  }
  function removeItem(index) {
    const newItems = items;
    newItems.splice(index, 1);
    setItems(newItems);
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-3xl">
                <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                  <div className="min-h-0 flex-1 flex flex-col py-6 overflow-x-hidden overflow-y-auto">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Criar Novo Pedido
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={OnClose}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6 relative flex-1 px-4 sm:px-6">
                      <div className="h-full min-w-half" aria-hidden="true">
                        <form autoComplete="true">
                          <Datalist
                            list={clientList}
                            label="Cliente"
                            name="cliente"
                          />
                          <Input
                            type="text"
                            label="Endereço da obra"
                            name="adress"
                          />
                          <section className="flex">
                            <Input
                              type="time"
                              label="Horario Inicial"
                              name="start-time"
                            />
                            <Input
                              type="time"
                              label="Horario Final"
                              name="end-time"
                            />
                          </section>
                        </form>
                      </div>
                      <div className="h-full min-w-half" aria-hidden="true">
                        <h1 className="text-xl font-bold">Orçamento:</h1>
                        <CreateItem
                          addItem={(event, values) => addItem(event, values)}
                        />
                        <BudgetList
                          itemsList={items}
                          removeItem={(index) => removeItem(index)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 px-4 py-4 flex justify-end mb-8 absolute bottom-0">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={OnClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={OnClose}
                  >
                    Save
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
