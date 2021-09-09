import "./styles.css";
import { SearchIcon } from "@heroicons/react/outline";

export default function SearchInput() {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Digite o que procura.."
      />
      <button type="submit">
        <SearchIcon
          className="search-icon text-gray-400 flex-shrink-0 h-5 w-5"
          aria-hidden="true"
        />
      </button>
    </form>
  );
}
