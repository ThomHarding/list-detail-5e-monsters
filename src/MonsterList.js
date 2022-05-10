import React from 'react';
import Monster from './Monster.js';

export default function MonsterList({ monsters }) {
  return <div className='monsters-list'>
    { 
      monsters.map(monster => <Monster key={monster.id} {...monster} />
      )
    }

  </div>;
}