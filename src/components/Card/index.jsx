import './styles.css';

export function Card({ name, time }){ 
    return(
        <div className='card'>
            <strong>
                <h3>TAREFA:</h3>
                <span>{name || "Digite uma tarefa..."}</span>
            </strong>
        </div>
    )
}