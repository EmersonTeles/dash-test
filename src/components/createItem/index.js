/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import Input from '../Input';
import Datalist from '../datalist';
import { itensList } from '../createOrderSection/data';

export default function CreateItem({ onAddItem, values, setValues }) {
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
    <form onSubmit={(event) => onAddItem(event, values)}>
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
