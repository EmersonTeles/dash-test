/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Input from '../Input';
import Datalist from '../datalist';
import { itensList } from '../createOrderSection/data';

export default function CreateItem({ addItem }) {
  const initialValues = {
    item: '',
    quantity: 1,
    price: 0.0,
  };

  const [values, setValues] = useState(initialValues);

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

  return (
    <form onSubmit={(event) => addItem(event, values, setValues)}>
      <Datalist
        list={itensList}
        label="Item"
        name="item"
        value={values.item}
        onChange={handleChange}
      />
      <section className="flex">
        <Input
          type="number"
          label="Quantidade"
          name="quantity"
          value={values.quantity}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Preço"
          name="price"
          value={values.price}
          onChange={handleChange}
        />
      </section>
      <button className="bg-gray-200 px-5" type="submit" label="Adicionar">
        Adicionar
      </button>
    </form>
  );
}
