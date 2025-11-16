  export  default function Button({onClick, smile}){
    return(
            <div>
                <button onClick={onClick}>Голосувати</button>
                <p>{smile.votes}</p>
            </div>

    )
    
}