export default function PopupImage({card, isOpen, onClose}){
    return (
        <div className= {`popup popup_open-card  ${isOpen && 'popup_opened'}`}>
        <figure className="popup__figure-card">
          <button className="popup__close-button decoration" type="button"  onClick={onClose}/>
          <img className="popup__figure-image" src={card.link} alt={card.name} />
          <figcaption className="popup__figure-caption" >{card.name}</figcaption>
        </figure>
      </div>
    )
}