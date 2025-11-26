
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "./store/actions.js";

export default function App() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  return (
    <div>
      <button onClick={() => dispatch(fetchPeople())}>
        Load Star Wars People
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      <ul>
        {data.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

