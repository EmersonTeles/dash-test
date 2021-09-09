import './styles.css';
import { FilterIcon } from '@heroicons/react/outline';

export default function FilterButton() {
  return (
    <button type="button" className="filtro">
      <FilterIcon className="filtro-icon" />
      Filtro
    </button>
  );
}
