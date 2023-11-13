

function Card(props) {
    return (
        <div className='Card'>
            <h2 className="name">{props.name}</h2>
            <div className="universe"><b>Вселенная:</b> {props.universe}</div>
            <div className="alterego"><b>Альтер эго:</b> {props.alterego}</div>
            <div className="occupation"><b>Род деятельности:</b> {props.occupation}</div>
            <div className="friends"><b>Друзья:</b> {props.friends}</div>
            <div className="superpowers"><b>Суперсилы:</b> {props.superpowers}</div>
            <img src={props.url}/>
            <div className="info"><b>Информация:</b> {props.info}</div>
            <div></div>
        </div>
    );
}

export default Card;