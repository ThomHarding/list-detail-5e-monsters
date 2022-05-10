import { Link } from 'react-router-dom';

export default function Monster({ id, Name, CR }) {
  return (
    <Link to={`/monsters/${id}`}>
      <div className='monster-object'>
        <h3>{Name}</h3>
        <p>Challenge Rating: {CR}</p>
      </div>
    </Link>
  );
}
