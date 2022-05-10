import { Link } from 'react-router-dom';

export default function Monster({ id, name, cr }) {
  return (
    <Link to={`/monsters/${id}`}>
      <div className='monster-object'>
        <h3>{name}</h3>
        <p>Challenge Rating: {cr}</p>
      </div>
    </Link>
  );
}
