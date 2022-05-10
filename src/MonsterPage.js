import { useEffect, useState } from 'react';
import './App.css';
import { getMonsters } from './services/fetch-utils';
import MonsterList from './MonsterList.js';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 20;
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const monsters = await getMonsters(from, to);

      setMonsters(monsters);
    }

    fetch();
  }, [page]);
  return (
    <>
      <h2>Current Page {page}</h2>
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
