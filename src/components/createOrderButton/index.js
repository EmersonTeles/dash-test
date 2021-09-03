/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import './styles.css';
import { PlusIcon } from '@heroicons/react/outline';

export default function CreateOrderButton(props) {
  return (
    <button type="button" className="new-order-button" onClick={props.onClick}>
      <PlusIcon className="plus-icon" />
      Novo Pedido
    </button>
  );
}
