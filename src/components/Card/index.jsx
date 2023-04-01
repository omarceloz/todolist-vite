import './styles.css';

export function Card({ name, time }){
    return(
        <div className='card'>
            <strong>
                <h3>TAREFA: </h3>
                <span>{name}</span>
            </strong>
            <small>HORARIO: {time}</small>
        </div>
    )
}