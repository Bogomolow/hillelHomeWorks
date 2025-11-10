import Button from './Button/Button.jsx'
import UserCard from './UserCard/UserCard.jsx'
import './App.css'
import './Button/Button.css'
import './UserCard/UserCard.css'
import { useState } from 'react';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const user1 = {
    name: "Ksenia",
    hobby: "Drawings"
  }
  const user2 = {
    name: "Alex",
    hobby: "Piano"
  }
  return (
    <div>
      <h1>React</h1>
      <Button text=" show Ksenia" onClick={() => setSelectedUser(user1)} />
      <Button text=" Show Alex" onClick={() => setSelectedUser(user2)} />
      <Button text="Hide" onClick={() => setSelectedUser(null)} />


      {selectedUser ? (
        <UserCard user={selectedUser} />
      ) : (
        <p>No user selected</p>
      )}

    </div>
  );

}

export default App
