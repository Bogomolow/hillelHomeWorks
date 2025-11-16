import { use, useState } from 'react'
import CardSmiles from './CardSmiles.jsx'
import Button from './Button.jsx'
import './App.css'

function App() {
  const [smiles, setSmiles] = useState([
    { name: 'Happy', votes: 0 },
    { name: 'Upset', votes: 0 },
    { name: 'Surprised', votes: 0 }
  ])

    const [winner, setWinner] = useState();

    const showResults = () => {
        const sortSmile = [...smiles].sort((a,  b ) => b.votes - a.votes)

        const winnerSmile = sortSmile[0]

        setWinner(winnerSmile);


    }

  const voteSmile = (index) => {
    const newSmile = [...smiles];
    newSmile[index].votes = newSmile[index].votes + 1;
    setSmiles(newSmile)


  }


  return (

    <div>
      {smiles.map((smile, index) => (
        <div key={index}>
            <CardSmiles smile={smile} onVote = {() => voteSmile(index)} />
           
        </div>
      ))}
      <button onClick={showResults}>Show Result</button>

      {winner && (
        <div>
            <h2>Переможець: {winner.name} 🏆</h2>
            <p>Кількість голосів: {winner.votes}</p>
        </div>
      )}
        
        </div>



  )
}

export default App
