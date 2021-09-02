import './styles.css';
import { PlusIcon } from '@heroicons/react/outline';

export default function CreateOrderButton() {
  return (
    <button type="button" className="new-order-button">
      <PlusIcon className="plus-icon" />
      Novo Pedido
    </button>
  );
}
