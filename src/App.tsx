
import Header from './components/header'
import arrowIcon from './assets/arrow_icon.png';
import { useState } from 'react';
// border-2 border-red-500
type Filter = 'todos' | 'camisetas' | 'canecas';

function App() {
  const [activeFilter, setActiveFilter] = useState('todos'); // valor inicial, por exemplo, 'todos'

  // Função para aplicar o filtro
  const handleFilterClick = (filter: Filter) => {
    setActiveFilter(filter);
  };
  return (
    <div className="bg-customGray h-screen p-0  ">
      <Header/>
    <div className=' w-[1200px]   m-auto'>

      <div className='flex h-[70px] items-center justify-between'>
      <nav className="flex items-center space-x-4 p-4">
      <button
        onClick={() => handleFilterClick('todos')}
        className={`text-gray-500 ${activeFilter === 'todos' ? 'underline decoration-orange-500 decoration-2' : ''}`}
      >
        Todos os Produtos
      </button>
      <button
        onClick={() => handleFilterClick('camisetas')}
        className={`text-gray-500 ${activeFilter === 'camisetas' ? 'underline decoration-orange-500 decoration-2' : ''}`}
      >
        Camisetas
      </button>
      <button
        onClick={() => handleFilterClick('canecas')}
        className={`text-gray-500 ${activeFilter === 'canecas' ? 'underline decoration-orange-500 decoration-2' : ''}`}
      >
        Canecas
      </button>
    </nav>
        <div className=' mx-7 text-gray-500 '>        
           <button className='flex items-center justify-center'>Organizar por <img src={arrowIcon} className='mx-2 h-1'/></button>

        </div>

      </div>
    
    </div>
  </div>
  );
}

export default App;
