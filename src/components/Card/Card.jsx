export default function Card({card, onCardClick, onBucketClick }){
    return(
        <div className="element">
        <button className="decoration element__bucket-button" onClick={onBucketClick} />
        <img className="element__image" alt={card.name} src={card.link} onClick={() => onCardClick({link: card.link, name: card.name})} />
        <div className="element__info">
          <h2 className="element__title" >{card.name}</h2>
          <div className="element__info_like-container">
            <button className="decoration element__like-button" type="button" />
            <span className="element__like-counter" />
          </div>
        </div>
      </div>
      
    )
}