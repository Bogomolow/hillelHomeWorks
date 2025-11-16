export default function CardSmiles({smile, onVote}){
    return(
        <div>
                <h2>Смайл: {smile.name}</h2>
                <p>Кількість голосів: {smile.votes} </p>
                <button onClick ={onVote}>Голосувати</button>
                


        </div>


    )
    
}