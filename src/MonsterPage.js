import { useEffect, useState } from 'react';
import './App.css';
import { getMonsters } from './services/fetch-utils';
import MonsterList from './MonsterList.js';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState('Name');
  const perPage = 20;
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const monsters = await getMonsters(from, to, orderBy);
      setMonsters(monsters);
    }

    fetch();
  }, [page, orderBy]);
  return (
    <>
      <h2>Current Page {page}</h2>
      <select onClick={(e) => setOrderBy(e.target.value)} className='orderDropdown'>
        <option value='Name'>Name</option>
        <option value='Size'>Size</option>
        <option value='HP'>HP</option>
        <option value='AC'>Armor Class</option>
        <option value='RA'>Type</option>
      </select>
      {/* search function */}
      <div className='buttons'>
        <button
          disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <MonsterList monsters={monsters} />
    </>
  );
}

export default App;
