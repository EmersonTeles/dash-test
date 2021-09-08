/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Input from '../Input';
import Datalist from '../datalist';
import { itensList } from '../createOrderSection/data';

export default function CreateItem({ addItem }) {
  const defaultValues = {
    item: '',
    quantity: 1,
    price: 0.0,
  };

  const [values, setValues] = useState(defaultValues);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setValue(name, value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(values);
  }

  return (
    <form onSubmit={(event) => addItem(event, values)}>
      <Datalist
        list={itensList}
        label="Item"
        name="item"
        onChange={handleChange}
      />
      <section className="flex">
        <Input
          type="number"
          label="Quantidade"
          name="quantity"
          onChange={handleChange}
        />
        <Input type="text" label="Preço" name="price" onChange={handleChange} />
      </section>
      <button className="bg-gray-200 px-5" type="submit" label="Adicionar">
        Adicionar
      </button>
    </form>
  );
}
