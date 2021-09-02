import Sidebar from "../../components/sidebar";
import Stats from "../../components/stats";
import Cards from "../../components/cards";

export default function Home() {
  return (
    <Sidebar>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl font-semibold text-gray-900">Visão Geral</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <Cards />
          <Stats />
        </div>
      </div>
    </Sidebar>
  );
}
